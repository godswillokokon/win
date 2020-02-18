

let questionDiv = document.getElementById("question");
let Ace = document.getElementById("Ace");
let Bce = document.getElementById("Bce");
let Cce = document.getElementById("Cce");
let Dce = document.getElementById("Dce");


let TQid = window.location.search.split("?")[1];
db.collection("quizz")
  .doc(TQid)
  .get()
  .then(doc => {


    let question = doc.data().question;

    let a = doc.data().a;
    let b = doc.data().b;
    let c = doc.data().c;
    let d = doc.data().d;
    let correctAns = doc.data().correctAns;
    let correct = sessionStorage.setItem("correct", correctAns);
    let level = doc.data().level;
    let tutor = doc.data().tutor;
    console.log(tutor, "teach");
    let TEACH = sessionStorage.setItem("teach", tutor);
    let courseTitle = doc.data().courseTitle;
    let T = sessionStorage.setItem("title", courseTitle);

    const htmlQuestion = `
       ${question}
      `;
    questionDiv.innerHTML = htmlQuestion;


    const htmlA = `
         ${a}
      `;
    Ace.innerHTML = htmlA;

    const htmlB = `
         ${b}
      `;
    Bce.innerHTML = htmlB;

    const htmlC = `
         ${c}
      `;
    Cce.innerHTML = htmlC;

    const htmlD = `
         ${d}
      `;
    Dce.innerHTML = htmlD;

  })
  .catch(err => {
    console.error(err);
  });

const options = document.querySelector(".options");

options.addEventListener("submit", e => {
  e.preventDefault();

  let date = new Date();
  let a = document.getElementById("customCheck01").checked;
  let b = document.getElementById("customCheck02").checked;
  let c = document.getElementById("customCheck03").checked;
  let d = document.getElementById("customCheck04").checked;
  let correctQ = sessionStorage.getItem("correct");
  let regnumQ = sessionStorage.getItem("regnum");
  let teachQ = sessionStorage.getItem("teach");
  let titleQ = sessionStorage.getItem("title");
  let score = 0;

  console.log(titleQ, "title");


  if (a == true && "a" == correctQ) {
    console.log("a did it", correctQ);
    score = 5;

  } else if (b == true && "b" == correctQ) {
    console.log("b did it", correctQ);
    score = 5;

  } else if (c == true && "c" == correctQ) {
    console.log("c did it", correctQ);
    score = 5;

  } else if (d == true && "d" == correctQ) {
    console.log("d did it", correctQ);
    score = 5;
  } else {

    console.log("hggg");
    score = 0;
  }
  console.log(question.innerHTML, "scrr");

  let QuestionTitle = question.innerHTML;

  return db
    .collection("results")
    .doc()
    .set({
      score,
      QuestionTitle,
      regnumQ,
      titleQ,
      teachQ,
      date

    })

    .catch(err => {
      console.error(err);
      alert("err : ", err)
    })




});
