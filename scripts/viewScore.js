const Ques = document.querySelector(".Ques");

const Score = document.querySelector(".Score");

const TitleLesson = document.querySelector(".TitleLesson");

const Teacher = document.querySelector(".Teacher");

let show = "";

let Qid = window.location.search.split("?")[1];
db.collection("results")
  .doc(Qid)
  .get()
  .then(doc => {
    let QuestionTitle = doc.data().QuestionTitle;
    let score = doc.data().score;
    let teachQ = doc.data().teachQ;
    let titleQ = doc.data().titleQ;
    if (score == 5) {
      show = "PASSED";
    } else if (score == 0) {
      show = "FAILED"
    } else {
      console.log("nothing");

    }
    console.log(score, "nothing", show);

    const htmlQues = `
       Question :  ${QuestionTitle}
      `;
    Ques.innerHTML = htmlQues;

    const htmlScores = `
        ${show}
      `;
    Score.innerHTML = htmlScores;

    const htmlTitle = `
       Course Title :  ${titleQ}
      `;
    TitleLesson.innerHTML = htmlTitle;

    const htmlTeach = `
    Tutor :  <i class="material-icons text-muted icon--left">schedule</i>    ${teachQ}
      `;
    Teacher.innerHTML = htmlTeach;




  })
  .catch(err => {
    console.error(err);
  });
