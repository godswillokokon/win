const addQuizz = document.querySelector(".addQuizz");

addQuizz.addEventListener("submit", e => {
  e.preventDefault();
  let question = document.getElementById("question").value;
  let correctAns = document.getElementById("correctAns").value;
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  let d = document.getElementById("d").value;
  let level = document.getElementById("level").value;
  let courseTitle = document.getElementById("courseTitle").value;
  let tutor = sessionStorage.getItem("adminUsername");


  return db
    .collection("quizz")
    .doc()
    .set({
      correctAns,
      question,
      a,
      b,
      c,
      d,
      level,
      courseTitle,
      tutor

    })
    .catch(err => {
      console.error(err);
      alert("err : ", err)
    });

});

