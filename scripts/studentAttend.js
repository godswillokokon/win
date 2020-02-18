const allQuizz = document.querySelector(".allQuizz");
const ResetupContent = data => {
  let html = "";
  data.forEach(data => {


    let Qid = data.id;
    let courseLevel = data.data().courseLevel;
    let courseTitle = data.data().courseTitle;
    let courseDescription = data.data().courseDescription;
    let time = data.data().time;
    let mainTime = time.toDate()
    let tutor = data.data().tutor;
    let regnum = data.data().regnum;




    const div = `
   <div class="list-group-item d-flex align-items-center">
  
                           
                            <a class="text-body flex" href=""> ${new Date(mainTime).toDateString()}</a>
                            <a class="text-body flex" href=""> ${tutor}</a>
                             <a class="text-body flex" href=""> ${courseLevel}</a>
                             <a class="text-body flex" href=""> ${courseTitle}</a>
                            
                         
                              
                           
                        </div>
    `;
    html += div;
  });
  allQuizz.innerHTML = html;
};
let regNumm = sessionStorage.getItem("regnum");

db.collection("attendance")
  .orderBy("courseLevel", "asc")
  .where("regnum", "==", regNumm)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      ResetupContent(data);
    },
    err => {
      console.log(err);
    }
  );
// setInterval(ResetupContent, 2000)
// ResetupContent();

