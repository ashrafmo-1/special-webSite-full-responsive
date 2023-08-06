const backgroundimgchangerOnClick = document.querySelector('.landing')

function background1() {
    backgroundimgchangerOnClick.style.background = "url('./image/1.jpg') center center / cover";
}

function background2() {
    backgroundimgchangerOnClick.style.background = "url('./image/2.jpg') center center / cover";
}

function background3() {
    backgroundimgchangerOnClick.style.background = "url('./image/3.jpg') center center / cover";
}

function background4() {
    backgroundimgchangerOnClick.style.background = "url('./image/4.jpg') center center / cover";
}


function background5() {
    backgroundimgchangerOnClick.style.background = "url('./image/5.jpg') center center / cover";
}



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

// change Bg After a custom time

let allImage = ["../image/1.jpg", "../image/2.jpg", "../image/4.jpg", "../image/5.jpg", "../image/6.jpg"];
let backgroundOption = true;
let backgroundInterval;

function randomImages() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            let randomnum = Math.floor(Math.random() * allImage.length);
            document.querySelector(".landing").style.backgroundImage = 'url("imgs/' + allImage[randomnum] + '")';
        }, 1000);
    };
};

// add ANd remove class Active from changer random Background
let backGroundChanger = document.querySelectorAll(".select span");
backGroundChanger.forEach(span => {
    span.addEventListener("click", function(ele) {
        // function to handel Active class (remove, add (class .active))
        activeFunction(ele)
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


// remove Active class from al Element from localStorage
let backgroundlocalStorage = localStorage.getItem("chacger-backGround");

// chick random in localStorage is not Empty
// random bg in local storamge
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
randomImages();



// Skills animation
window.onscroll = function() {

    let mySkills = document.querySelector(".skills");
    let skillsOffsettop = mySkills.offsetTop

    // make condition to show span progress
    if (window.scrollY > (skillsOffsettop + mySkills.offsetHeight - window.innerHeight)) {

        document.querySelectorAll(".skills .allBoxesSkills .box span").forEach(skills => {
            skills.style.width = skills.dataset.prog;
        });
    };
};


// crate popup in galary (train document object modil)
let allgalary = document.querySelectorAll(".allGalary img");
allgalary.forEach(img => {
    // on click img add class overpopup
    img.addEventListener("click", (e) => {
        // create background element overide for all page
        let overBGC = document.createElement("section");
        overBGC.className = "popup-over";
        document.body.appendChild(overBGC);
        // image popup box
        let popupBox = document.createElement("section");
        popupBox.className = "popupBox"
            // add Alt text to popup
        if (img.alt !== null) {
            let infoImageAlt = document.createElement("h3")
            let textAlt = document.createTextNode(`image number:-  ${img.alt}`)
            infoImageAlt.style.textAlign = 'center'
            infoImageAlt.appendChild(textAlt)
            popupBox.appendChild(infoImageAlt)
        }
        // create image 
        let popupImage = document.createElement("img")
            // set image src in popup
        popupImage.src = img.src;
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
let hamburger = document.querySelector(".navgation .menu-icon");
let nav = document.querySelector(".navgation ul");
hamburger.onclick = () => {
    nav.classList.toggle("open");
}

// get all navBullets
let bullets = document.querySelectorAll(".navBullets .bullet");
let navgation = document.querySelectorAll(".links li a")
allNavgationSiteScrolling(bullets);
allNavgationSiteScrolling(navgation);


// edit font family
let boxFonts = document.querySelector("#font");
let body = document.querySelector("body")
boxFonts.onclick = function() {
        window.localStorage.setItem("fontchange", boxFonts.value)
        body.style.fontFamily = boxFonts.value
    }
    // add data to localStorage
body.style.fontFamily = window.localStorage.getItem('fontchange')
    // to pin select && never ralod changer
boxFonts.value = window.localStorage.getItem('fontchange')



// handel All function from navgatoin and nav bullets
function allNavgationSiteScrolling(elements) {
    elements.forEach((e) => {
        e.addEventListener('click', (e) => {
            e.preventDefault(); // stop defult worker 
            document.querySelector(e.target.dataset.sections).scrollIntoView({ // Error in some browser (brave)
                behavior: 'smooth'
            });
        });
    });
};

// handle Active class
function activeFunction(e) {
    e.target.parentElement.querySelectorAll('.active').forEach(el => {
        el.classList.remove('active')
    })
    e.target.classList.add('active')
}