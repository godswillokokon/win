const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESET = "i4hpnx9j";
const CLOUD_NAME = "ogcodes";

// let imgPreview = document.getElementById("img-preview");
let fileUpload = document.getElementById("file-upload");

let Tutorusername = sessionStorage.getItem("adminUsername");
let Tutoremail = sessionStorage.getItem("adminEmail");


fileUpload.addEventListener("change", event => {
    let courseDescription = document.getElementById("courseDescription").value;
    let courseTitle = document.getElementById("courseTitle").value;
    let courseLevel = document.getElementById("courseLevel").value;
    let file = event.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    console.log(file);
    axios({
        url: CLOUDINARY_URL,
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: formData
    })
        .then(res => {
            console.log(res);
            console.log(res.data.secure_url);

            // imgPreview.src = res.data.secure_url;
            date = res.data.created_at;
            duration = res.data.duration;
            res.data.tags = courseTitle;
            console.log(courseTitle);
            return db
                .collection("class")
                .doc()
                .set({
                    lesson: res.data.secure_url,
                    courseTitle,
                    courseDescription,
                    date,
                    duration,
                    courseLevel,
                    Tutorusername,
                    Tutoremail
                }, alert("Course Added Successfully"))
                .catch(err => {
                    console.error(err);
                });
        })
        .catch(err => {
            console.error(err);
        });
});