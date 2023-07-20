let settingBox = document.querySelector(".settingBox")
settingBox.onclick = function() {
    this.classList.toggle("open")
};

// change color
let colorsChanger = document.querySelectorAll(".changeColor span");
colorsChanger.forEach(span => {
        span.addEventListener("click", function(ele) {
            console.log(ele.target.dataset.color) // for testing only
            document.documentElement.style.setProperty("--text-main-color", ele.target.dataset.color)
                // set color to local storage
            localStorage.setItem("color_option", ele.target.dataset.color)

            // remove Active class from al Element
            ele.target.parentElement.querySelectorAll(".active").forEach(el => {
                    el.classList.remove("active")
                })
                // add Active class From Target Element
            ele.target.classList.add("active")
                //     // set Active class to local Storage
                // localStorage.setItem("ActiveColor", ele.target.classList)
        })
    })
    // get color from localStorage


let myColors = localStorage.getItem("color_option");
if (myColors !== null) {
    console.log("have color on local"); // To make sure that color
    document.documentElement.style.setProperty(`--text-main-color`, myColors);

    // add Active class From local storage
    document.querySelectorAll(".changeColor span").forEach(ele => {
        // remove Active class from All Element
        ele.classList.remove("active")
        if (ele.dataset.color === myColors) {
            ele.classList.add("active")
        }
    })
}
// add ANd remove class Active from changer Background
let backGroundChanger = document.querySelectorAll(".select div");
backGroundChanger.forEach(div => {
    div.addEventListener("click", function(ele) {
        // remove Active class from al Element
        ele.target.parentElement.querySelectorAll(".active").forEach(el => {
                el.classList.remove("active")
            })
            // add Active class From Target Element
        ele.target.classList.add("active")
    });
});