




const allQuiz = document.querySelector(".allQuizz");
const VQsetupContent = data => {
  let html = "";
  data.forEach(data => {
    let Qid = data.id;
    let question = data.data().question;
    let level = data.data().level;

    let courseTitle = data.data().courseTitle;

    const div = `
   
   <div class="list-group-item d-flex align-items-center">
                            <a class="text-body flex" href="./student-take-quiz.html?${Qid}">Question : ${question}</a>
                            <a class="text-body flex" href="./student-take-quiz.html?${Qid}">Level : ${level}</a>
                            <a class="text-body flex" href="./student-take-quiz.html?${Qid}">Course : ${courseTitle}</a>
                          
                        </div>
                    
    `;
    html += div;
  });
  allQuiz.innerHTML = html;
};
let slevel = sessionStorage.getItem("sLevel");
console.log(slevel, "level");
let t = sessionStorage.getItem("couresT");

db.collection("quizz")
  // .orderBy("dateCreated", "asc")
  .where("courseTitle", "==", t)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      VQsetupContent(data);
    },
    err => {
      console.log(err);
    }
  );
