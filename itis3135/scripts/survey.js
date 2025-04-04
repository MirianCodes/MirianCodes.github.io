document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("intro-form");
    const coursesContainer = document.getElementById("courses");
    const addCourseButton = document.getElementById("add-course");
    const output = document.getElementById("output");


    const imageInput = document.getElementById("image");
    const imagePreview = document.getElementById("image-preview");

    imageInput.addEventListener("change", function() {
        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
            imagePreview.src = event.target.result;
        };
        reader.readAsDataURL(file);
        }  else {
            imagePreview.src = "images/placeholder.png";
        }
    });
    function addCourseField() {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course-entry");
        
        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.name = "courses";
        courseInput.placeholder = "Enter a Course";
        courseInput.required = true;

        const whyInput = document.createElement("input");
        whyInput.type = "text";
        whyInput.name = "reasons";
        whyInput.placeholder = "Why are you taking this course?";
        whyInput.required = true;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            coursesContainer.removeChild(courseDiv);
        });
        courseDiv.appendChild(courseInput);
        courseDiv.appendChild(deleteButton);
        coursesContainer.appendChild(courseDiv);
        courseDiv.appendChild(whyInput);
    }


    addCourseButton.addEventListener("click", function() {
        addCourseField();
    });
  
    form.addEventListener("reset", function() {
        output.style.display = "none";
        output.innerHTML = "";
    });

    function validateForm(){
        const requiredFields = form.querySelectorAll("#intro-form [required]");
        for (let field of requiredFields){
            if (field.value.trim() === ""){
                alert("Please fill out all required fields.");
                return false;
            }
        }
        const imageInput = document.getElementById("image");
        if (imageInput.files.length === 0) {
            alert("Please upload an image.");
            return false;
        }
        const fileType = imageInput.files[0].type;
        if (fileType !== "image/jpeg" && fileType !== "image/png") {
            alert("Please upload a JPEG or PNG image.");
            return false;
        }
        return true;
    }
  
    function displayIntroduction() {
        const name = form.elements["name"].value;
        const mascot = form.elements["mascot"].value;
        const image = form.elements["image"].files[0];
        const imageCaption = form.elements["imageCaption"].value;
        const personalBackground = form.elements["personalBg"].value;
        const professionalBackground = form.elements["profBg"].value;
        const academicBackground = form.elements["academicBg"].value;
        const webBackground = form.elements["webBg"].value;
        const platform = form.elements["platform"].value;
        const funnyThing = form.elements["funnyThing"].value;
        const anythingElse = form.elements["anythingElse"].value;
        const courses = Array.from(document.querySelectorAll("input[name='courses']"))
        .map((input, index) => {
            const reason = document.querySelectorAll("input[name='reasons']")[index].value;
            return { course: input.value, reason };
        })
        .filter(function(entry) {
            return entry.course !== "" && entry.reason !== "";
        });
        
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;
            form.style.display = "none";
            output.innerHTML = `
                <h2>Introduction</h2>
                <h3>${name} ⛧ ${mascot}</h3>
                <img src="${imageUrl}" alt="Uploaded Image" style="max-width: 300px;"><br>
                <em>${imageCaption}</em>
                <ul>
                    <li><strong>Personal Background:</strong> ${personalBackground}</li>
                    <li><strong>Professional Background:</strong> ${professionalBackground}</li>
                    <li><strong>Academic Background:</strong> ${academicBackground}</li>
                    <li><strong>Background in this subject:</strong> ${webBackground}</li>
                    <li><strong>Primary Computer Platform:</strong> ${platform}</li>
                    <li><strong>Courses Currently Taking & Why:</strong></li>
                    <ul>
                        ${courses.map(function(entry) {
                            return `<li><strong>${entry.course}:</strong> ${entry.reason}</li>`;
                        }).join("")}
                    </ul>
                    <li><strong>Funny Thing:</strong> ${funnyThing}</li>
                    <li><strong>Anything Else:</strong> ${anythingElse}</li>
                </ul>
                <button onclick="window.location.reload();">Start Over</button>
            `;
            output.style.display = "block";
        };
        reader.readAsDataURL(image);

    }
    form.addEventListener("submit", function(event){
        event.preventDefault();
        if (validateForm()){
            displayIntroduction();
        }
    });
});