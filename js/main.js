// section setting
let settingBox = document.querySelector(".settingBox")
let gearBtn = document.querySelector(".settingBox .icon")
gearBtn.onclick = () => {
    settingBox.classList.toggle("open")
}


// start cacger color lest
let colorsChanger = document.querySelectorAll(".changeColor span");
colorsChanger.forEach(span => {
        span.addEventListener("click", function(ele) {
            console.log(ele.target.dataset.color) // for testing only
            document.documentElement.style.setProperty("--text-main-color", ele.target.dataset.color)
                // set color to local storage
            localStorage.setItem("color_option", ele.target.dataset.color)

            // function to handel Active class (remove, add (class .active))
            activeFunction(ele)
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
// end cacger color lest

// add ANd remove class Active from changer random Background
let backGroundChanger = document.querySelectorAll(".select span");
backGroundChanger.forEach(span => {
    span.addEventListener("click", function(ele) {

        // function to handel Active class (remove, add (class .active))
        activeFunction(ele)

        // Stop or stay random
        if (ele.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomImages()
            localStorage.setItem("chacger-backGround", true)
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval)
            localStorage.setItem("chacger-backGround", false)
        };
    });
});
let backgroundOption = true; // true => Boolian Value
// constrol the interval (must catch to control it)
let backgroundInterval;
// remove Active class from al Element from localStorage
let backgroundlocalStorage = localStorage.getItem("chacger-backGround");
// chick random in localStorage is not Empty
if (backgroundlocalStorage !== null) {
    if (backgroundlocalStorage === 'true') {
        backgroundOption = true
    } else {
        backgroundOption = false
    }
    // remove Active class from all spans
    let allSpans = document.querySelectorAll(".select span")
    allSpans.forEach((ele) => {
        ele.classList.remove("active")
    })
    if (backgroundlocalStorage === 'true') {
        let yes = document.querySelector(".select .yes")
        yes.classList.add("active")
    } else {
        let yes = document.querySelector(".select .no")
        yes.classList.add("active")
    }
}

// change Bg After a custom time
let landingBg = document.querySelector(".landing");
let allImage = ["../image/1.jpg", "../image/2.jpg", "../image/4.jpg", "../image/5.jpg", "../image/6.jpg"];
// random background option
function randomImages() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            // random length number
            let randomnum = Math.floor(Math.random() * allImage.length);
            // console.log(randomnum) // test
            landingBg.style.backgroundImage = 'url("imgs/' + allImage[randomnum] + '")';
        }, 1000);
    };
};
randomImages();


// get Skills
let mySkills = document.querySelector(".skills");
// start imnemation (on scroll We Well make function)
window.onscroll = function() {
    // skills offsetTop
    let skillsOffsettop = mySkills.offsetTop

    // offsetHeight make to calculate MyELement + encluding (margin, padding, border)
    let skillsOuterHeight = mySkills.offsetHeight
    let windowHeight = window.innerHeight // get height The displayed page
    let windowScrolltop = window.scrollY // window scroll top (size page for scrolling)
        // console.log(skillsOuterHeight) // test
        // make condition to show span progress
    if (windowScrolltop > (skillsOffsettop + skillsOuterHeight - windowHeight)) {
        this.console.log(`my all skills`) // if you go to the skills section show this message
        let myAllSkills = document.querySelectorAll(".skills .allBoxesSkills .box span");
        myAllSkills.forEach(skills => {
            skills.style.width = skills.dataset.prog;
        });
    };
}


// crate popup in galary
let allgalary = document.querySelectorAll(".allGalary img");
console.log(allgalary)
allgalary.forEach(img => {
    // on click img add class overpopup
    img.addEventListener("click", (ele) => {
        // create overide ele
        let over = document.createElement("div");
        over.className = "popup-over"
        document.body.appendChild(over)
        let popupBox = document.createElement("div")
        popupBox.className = "popupBox"
            // add Alt text to popup
        if (img.alt !== null) {
            let infoImageAlt = document.createElement("h3")
            let textAlt = document.createTextNode(img.alt)
            infoImageAlt.style.textAlign = 'center'
            infoImageAlt.appendChild(textAlt)
            popupBox.appendChild(infoImageAlt)
        }
        // create image 
        let popupImage = document.createElement("img")
            // set image src in popup
        popupImage.src = img.src
        popupBox.appendChild(popupImage)
        document.body.appendChild(popupBox)
            // btn close popup
        let btnClose = document.createElement("span")
        let btnCloseTExt = document.createTextNode("X")
        btnClose.appendChild(btnCloseTExt)
        btnClose.className = "btnClose"
        popupBox.appendChild(btnClose)

    })
})
document.addEventListener('click', ele => {
    if (ele.target.className === 'btnClose') {
        // ele.target.parentNode.remove()
        document.querySelector(".popup-over").remove()
        document.querySelector(".popupBox").remove()
    }
});


// navgation bar from small devices
let hamburger = document.querySelector(".navgation .toggle");
let nav = document.querySelector(".navgation ul");
hamburger.onclick = () => {
    nav.classList.toggle("open");
}



// get all navBullets
let bullets = document.querySelectorAll(".navBullets .bullet");
let navgation = document.querySelectorAll(".links li a")


// handel All function
function allNavgationSiteScrolling(elements) {
    elements.forEach((e) => {
        e.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.sections).scrollIntoView({ // Error in some browser (brave)
                behavior: 'smooth'
            });
        });
    });
};

allNavgationSiteScrolling(bullets);
allNavgationSiteScrolling(navgation);

// handle Active class
function activeFunction(e) {
    e.target.parentElement.querySelectorAll('.active').forEach(el => {
        el.classList.remove('active')
    })
    e.target.classList.add('active')
}