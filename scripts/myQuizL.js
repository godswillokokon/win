const allResults = document.querySelector(".allResults");
const ResultsSetupContent = data => {
  let html = "";
  data.forEach(data => {


    let Qid = data.id;
    let QuestionTitle = data.data().QuestionTitle;
    let titleQ = data.data().titleQ;
    let regnumQ = data.data().regnumQ;
    let date = data.data().date;
    let mainTime = date.toDate()
    let score = data.data().score;
    let teachQ = data.data().teachQ;



    const div = `
   <div class="list-group-item d-flex align-items-center">
  
                           
                            <a class="text-body flex" href="">${titleQ} </a>
                            <a class="text-body flex" href=""> ${QuestionTitle}</a>
                            <a class="text-body flex" href=""> ${score}</a>
                             <a class="text-body flex" href=""> ${new Date(mainTime).toDateString()}</a>
                             <a class="text-body flex" href=""> ${regnumQ}</a>
                            
                         
                              
                           
                        </div>
    `;
    html += div;
  });
  allResults.innerHTML = html;
};
let regNums = sessionStorage.getItem("regnum");

let tuttss = sessionStorage.getItem("adminUsername");

db.collection("results")
  .orderBy("date", "asc").orderBy("regnumQ", "asc")
  .where("teachQ", "==", tuttss)
  .limit(4)
  //.where("regnumQ", "==", regNums)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      ResultsSetupContent(data);
    },
    err => {
      console.log(err);
    }
  );
// setInterval(ResultsSetupContent, 2000)
// ResultsSetupContent();

