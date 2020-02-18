
let docplayer = document.getElementById("docplayer");



let title = document.getElementById("title");
let intro = document.getElementById("intro");
let description = document.getElementById("description");
let timeframe = document.getElementById("timeframe");
let level = document.getElementById("level");
let tutor = document.getElementById("tutor");
let tutorsec = document.getElementById("tutorsec");
let dateCreated = document.getElementById("date");
let mail = document.getElementById("mail");


let id = window.location.search.split("?")[1];
db.collection("class")
  .doc(id)
  .get()
  .then(doc => {
    let courseLevel = doc.data().courseLevel;

    let sessionLevel = sessionStorage.setItem("sLevel", courseLevel);
    console.log(courseLevel, "DS");
    lesson = doc.data().lesson;
    // console.log(docplayer);
    docplayer.src = lesson;


    courseTitle = doc.data().courseTitle;
    courseDescription = doc.data().courseDescription;
    date = doc.data().date;
    duration = doc.data().duration;
    tutor = doc.data().Tutorusername
    Tutoremail = doc.data().Tutoremail
    console.log(Tutoremail);

    let mainDuration = duration * 1000 / 60;
    let mainTime = duration / 60;
    let ninty = mainDuration * 90 / 100;
    let attendance = ninty * 60;

    console.log(attendance, "hyygfyh");

    setTimeout(function () {
      let time = new Date;
      let regnum = sessionStorage.getItem("regnum");

      console.log("updated");
      alert("Your have successfully attended this class")
      return db
        .collection("attendance")
        .doc()
        .set({
          courseLevel,
          courseTitle,
          courseDescription,
          time,
          regnum,
          tutor

        })
        .catch(err => {
          console.error(err);
          alert("err : ", err)
        });



    }, attendance);

    username = doc.data().username;

    const htmlTitle = `
        <span id="title" class="card-title text-body mb-0">${
      doc.data().courseTitle
      }</span>
      `;
    title.innerHTML = htmlTitle;

    const htmlIntro = `
      <h1 id="intro" class="text-white flex m-0" >${doc.data().courseTitle}</h1>
      `;
    intro.innerHTML = htmlIntro;

    const htmlDescription = `
      <p id="description" class="hero__lead measure-hero-lead text-white-50 mb-24pt">
        ${doc.data().courseDescription}
      </p>
      `;
    description.innerHTML = htmlDescription;
    const htmlTime = `
       <p id="timeframe" class="h2 text-white-50 font-weight-light m-0">Video length : ${Math.ceil(
      mainTime
    )} Minutes</p>
      `;
    timeframe.innerHTML = htmlTime;
    const htmlLevel = `
        <li id="level" class="nav-item navbar-list__item">
          <i  class="material-icons text-muted icon--left">assessment</i>
         Level : ${doc.data().courseLevel}
        </li>
      `;
    level.innerHTML = htmlLevel;
    const htmltutor = `
        <span id="tutor" class="text-50 small font-weight-bold mr-8pt"> ${
      doc.data().Tutorusername
      }</span>
      `;
    tutor.innerHTML = htmltutor;
    const htmltutorsec = `
        <div class="media-body" id="tutorsec">
          <a class="card-title m-0" >${doc.data().Tutorusername}</a>
          <p class="text-50 lh-1 mb-0">Lecturer</p>
        </div>
      `;
    tutorsec.innerHTML = htmltutorsec;
    const htmlDate = `
        <li class="nav-item navbar-list__item" id="date">
          <i class="material-icons text-muted icon--left">schedule</i>
           Date Created:  ${new Date(doc.data().date).toDateString()}
        </li>
      `;
    dateCreated.innerHTML = htmlDate;
    const htmlMail = `
     Having any issues?  <a href="mailto:${Tutoremail}?Subject= issues on ${courseTitle}" target="_top  class=" btn btn-default"><i class="icon - pencil"></i>  <strong style="color: #000000d9">  &nbsp; Send me a mail</H4></a>
      `;
    mail.innerHTML = htmlMail;
  })
  .catch(err => {
    console.error(err);
  });
