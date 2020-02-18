

const allQuizz = document.querySelector(".allQuizz");
const QuizzsetupContent = data => {
  let html = "";
  data.forEach(data => {
    let Qid = data.id;
    let question = data.data().question;
    let level = data.data().level;
    let courseTitle = data.data().courseTitle;
    let tutor = data.data().tutor;

    const div = `
   <div class="list-group-item d-flex align-items-center">
                            <a class="text-body flex">Question : ${question}</a>
                            <a class="text-body flex">Level : ${level}</a>
                            <a class="text-body flex">Course : ${courseTitle}</a>
                           
                        </div>
    `;
    html += div;
  });
  allQuizz.innerHTML = html;
};
let tuttzz = sessionStorage.getItem("adminUsername");
db.collection("quizz")
  .orderBy("courseTitle", "asc")
  .where("tutor", "==", tuttzz)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      QuizzsetupContent(data);
    },
    err => {
      console.log(err);
    }
  );
// setInterval(QuizzsetupContent, 2000)
// QuizzsetupContent();
