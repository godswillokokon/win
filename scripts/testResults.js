




const testButton = document.querySelector(".testButton");
let regnumT = sessionStorage.getItem("regnum");
const VQsetupContent = data => {
  let html = "";
  data.forEach(data => {
    let Tid = data.id;


    const div = `
   <a class="text-body flex" href="./student-quiz-result-details.html?${Tid}">
  <button type="submit" class="btn justify-content-center btn-accent"> Check Score<i
                        class="material-icons icon--right">keyboard_arrow_right</i></a></span>
                    
                           </button>
                    </a>
    `;
    html += div;
  });
  testButton.innerHTML = html;
};
let slevel = sessionStorage.getItem("sLevel");
console.log(slevel, "level");

db.collection("results")
  .orderBy("date", "asc")
  .where("regnumQ", "==", regnumT)
  .limit(1)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      VQsetupContent(data);
    },
    err => {
      console.log(err);
    }
  );
