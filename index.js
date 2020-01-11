let ican = document.getElementById('ican');
let portrait = document.getElementById('portrait');
let portraitContainer = document.getElementsByClassName('portrait-container')[0];

// let changePortrait = function(){
//     let newPic, newText;
//     if(ican.innerText === 'normally'){
//         newText = 'can';
//         newPic = './images/me.jpg';
//     } else {
//         newText = 'normally';
//         newPic = './images/me-messager.jpg';
//     }
//     portraitContainer.classList.add('transition');
//     setTimeout(() => {
//         ican.innerHTML = newText;
//         portrait.src = newPic;
//     }, 301);
//     setTimeout(() => {
//         portraitContainer.classList.remove('transition');
//     }, 302);
// }

// let changePortraitInterval = setInterval(changePortrait, 5000);

// projects animations and picture carousel

const airbnb = ['https://dzwonsemrish7.cloudfront.net/items/191I0Z2T0K3n0l0c3g1H/Screen%20recording%202018-02-18%20at%2004.56.22%20PM.gif', 'https://dzwonsemrish7.cloudfront.net/items/1i0v2v313b2U1u1p1K2n/Screen%20recording%202018-02-18%20at%2004.50.57%20PM.gif', 'https://dzwonsemrish7.cloudfront.net/items/0M063z0P2G2c3o3z3A0O/Screen%20recording%202018-02-18%20at%2004.46.14%20PM.gif'];
const airbnbmobile = ['https://dzwonsemrish7.cloudfront.net/items/1t223Q3R2y0J2K430v0Z/Screen%20Recording%202018-04-02%20at%2011.31.22.23%20AM.gif', 'https://dzwonsemrish7.cloudfront.net/items/3w1z062j290i301l2o46/Screen%20Recording%202018-04-02%20at%2011.30.28.54%20AM.gif']
const goalbank = ['./images/goal-bank-1.PNG', './images/goal-bank-2.PNG'];
const travelcheap = ['./images/travel-1.PNG', './images/travel-2.PNG', './images/travel-3.PNG'];
const bedandbread = ["https://dzwonsemrish7.cloudfront.net/items/1c3U0t2V0I1N3A2r3p0K/Screen%20recording%202018-02-18%20at%2003.12.33%20PM.gif", "./images/bed-bread-icons.JPG", "https://dzwonsemrish7.cloudfront.net/items/0z3K3X0s0n3a1j062316/Screen%20recording%202018-02-18%20at%2003.26.26%20PM.gif", "https://dzwonsemrish7.cloudfront.net/items/0D192v0f1R462W0L1u26/Screen%20Recording%202018-04-02%20at%2011.11.59.50%20AM.gif", "https://dzwonsemrish7.cloudfront.net/items/3c0R1P17072N053B3p0N/Screen%20Recording%202018-04-02%20at%2011.26.30.17%20AM.gif"];
const bedandbreadmobile = ['https://dzwonsemrish7.cloudfront.net/items/3u2M0Z27450t000A1X09/Screen%20recording%202018-03-11%20at%2007.08.08%20PM.gif', 'https://dzwonsemrish7.cloudfront.net/items/3M2d1m1b0e3Y2Y1o1p3u/Screen%20recording%202018-03-11%20at%2007.14.06%20PM.gif'];
let airbnbcount = 0;
let airbnbmobilecount = 0;
let goalbankcount = 0;
let travelcount = 0;
let bedandbreadcount = 0;
let bedandbreadmobilecount = 0;

function carousel(dir, str) {
    let newSrc;
    switch (str){
        case 'bedandbread':
            bedandbreadcount = setCount(dir, bedandbreadcount, bedandbread);
            newSrc = bedandbread[bedandbreadcount];
            break;
        case 'bedandbreadmobile':
            bedandbreadmobilecount = setCount(dir, bedandbreadmobilecount, bedandbreadmobile);
            newSrc = bedandbreadmobile[bedandbreadmobilecount]; 
            break;
        case 'airbnb':
            airbnbcount = setCount(dir, airbnbcount, airbnb);
            newSrc = airbnb[airbnbcount];
            break;
        case 'airbnbmobile':
            airbnbmobilecount = setCount(dir, airbnbmobilecount, airbnbmobile);
            newSrc = airbnbmobile[airbnbmobilecount];
            break;
        case 'goalbank':
            goalbankcount = setCount(dir, goalbankcount, goalbank);
            newSrc = goalbank[goalbankcount];
            break;
        case 'travelcheap':
            travelcount = setCount(dir, travelcount, travelcheap);
            newSrc = travelcheap[travelcount];
            break;
        }
document.getElementById(str).style.opacity = '0';
document.getElementById(str).src = '';
setTimeout(function () {
    document.getElementById(str).src = newSrc;
}, 301);
setTimeout(function () {
    document.getElementById(str).style.opacity = '1';
}, 350);
}

function setCount(dir, count, array){    
    if(dir === 'add'){
    if (count === array.length - 1){ count = 0; } else { count++; }
    } else {
    if (count === 0) { count = array.length - 1 } else { count--; }
    }
    return count;
}

//scroll effects
window.addEventListener('scroll', scrollActions);

let projectContainerTops = [];
const projectContainers = document.querySelectorAll('.description')
    projectContainers.forEach((cur, idx)=>{
        projectContainerTops.push(cur.getBoundingClientRect().top);
    })
const height = window.innerHeight;
function scrollActions(event){
    if (window.scrollY > projectContainerTops[5] - (height * .5)){
        projectContainers[5].style.transform = 'translate(0px, 0px)';
        projectContainers[5].style.opacity = '1';
    } else if (window.scrollY > projectContainerTops[4] - (height * .5)){
        projectContainers[4].style.transform = 'translate(0px, 0px)';
        projectContainers[4].style.opacity = '1';
    } else if (window.scrollY > projectContainerTops[3] - (height * .5)){
        projectContainers[3].style.transform = 'translate(0px, 0px)';
        projectContainers[3].style.opacity = '1';
    } else if (window.scrollY > projectContainerTops[2] - (height * .5)){
        projectContainers[2].style.transform = 'translate(0px, 0px)';
        projectContainers[2].style.opacity = '1';
    } else if (window.scrollY > projectContainerTops[1] - (height * .5)){
        projectContainers[1].style.transform = 'translate(0px, 0px)';
        projectContainers[1].style.opacity = '1';
    } else if (window.scrollY > projectContainerTops[0] - (height * .5)){
        projectContainers[0].style.transform = 'translate(0px, 0px)';
        projectContainers[0].style.opacity = '1';
    }
}


// let count = 1;
// let translateAmount = 0;
// let slider;
// function coasterSlider (){
//     let container = document.querySelector('.slider-container');
//     let containerNodes = container.childNodes;
//     let newImgContainer = document.createElement('div');
//     newImgContainer.classList.add('inactive');
//     newImgContainer.classList.add('slider-container-img-container');
//     let newImg = document.createElement('img');
//     console.log(containerNodes[count].childNodes)
//     if(count > 19){
//         newImg.src = containerNodes[count].childNodes[0].src;
//     } else {
//         newImg.src = containerNodes[count].childNodes[1].src;
//     }
//     newImg.alt = 'frank robenalt graphic design';
//     newImgContainer.appendChild(newImg);
//     container.appendChild(newImgContainer);
//     if(window.innerWidth < 600){
//         translateAmount -= 160;
//     } else {
//         translateAmount -= 360;
//     }
//     document.querySelector('.slider-container').style.transform = 'translateX(' + translateAmount + 'px)';
//     containerNodes[count].classList.add('inactive');
//     console.log(count)
//     if(count > 19){ count++ }
//     else { count+=2 };
//     containerNodes[count].classList.remove('inactive');
// }

// setTimeout(() => {
//     coasterSlider();
// }, 200);
// slider = setInterval(coasterSlider, 3000);

let slides = document.querySelectorAll('.thumb');
let capPic = document.querySelectorAll('.design-example')[0];
let capCount = 0;

let capHillSlider = function(){
    slides[capCount].classList.add('inactive-thumb')
    if (capCount === slides.length - 1){ capCount = 0 }
    else { capCount++ }
    let newSource = slides[capCount].src;
    capPic.style.opacity = 0;
    setTimeout(() => {
        capPic.src = newSource;
    }, 501);
    setTimeout(() => {
        capPic.style.opacity = 1;
        slides[capCount].classList.remove('inactive-thumb');
    }, 502);
}

let capHillInterval = setInterval(capHillSlider, 5000);

let changeDesign = function(event){
    if (event.target.src === capPic.src){ return }
    slides[capCount].classList.add('inactive-thumb')
    capPic.style.opacity = 0;
    clearInterval(capHillInterval);
    let newSlide;
    for(var i=0; i<slides.length; i++){
        if(slides[i] === event.target){
            newSlide = slides[i];
            capCount = i;
        }
    }
    setTimeout(() => {
        capPic.src = newSlide.src;
    }, 501);
    setTimeout(() => {
        capPic.style.opacity = 1;
        slides[capCount].classList.remove('inactive-thumb');
    }, 502);
    capHillInterval = setInterval(capHillSlider, 5000)
}

let sections = ['aboutme', 'skills', 'mywork', 'contact'];
function scrollToSection(sectionId, mobile) {
    if(mobile){ showMobileNav() }
    for (var i=0; i<sections.length; i++){
        document.getElementById(sections[i]).style.transform = 'translateY(0px)';
    }
    const mainSection = document.getElementsByClassName('main')[0];
    const about = document.getElementById(sectionId);
    setTimeout(() => {
        about.scrollIntoView({ behavior: "smooth"});
    }, 301);
    if (sectionId === 'contact' || window.innerWidth > 1250){ return }
    else {
         setTimeout(() => {
            for (var i=0; i<sections.length; i++){
                document.getElementById(sections[i]).style.transform = 'translateY(125px)';
            }
         }, 750);
    }
}
window.addEventListener('scroll', resetTop);

function resetTop (){
    if (window.scrollY < 50){
        for (var i=0; i<sections.length; i++){
            document.getElementById(sections[i]).style.transform = 'translateY(0px)';
        }
    }
}

let mobileNav = false;
function showMobileNav(){
    if (mobileNav){
        document.getElementById('menu-mobile').style.transform = 'translateY(-100%)';
        document.getElementById('arrow').style.transform = 'rotate(0deg)';
        mobileNav = false;
        document.body.scroll = "yes";
    } else {
        document.getElementById('menu-mobile').style.transform = 'translateY(100px)';
        document.getElementById('arrow').style.transform = 'rotate(180deg)';
        mobileNav = true;
        document.body.scroll = "no";
    }
}