window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const bg = document.getElementById('about').getBoundingClientRect();
// const bgtwo = document.getElementById('projects').getBoundingClientRect();
// const bgEnd = document.getElementById('contact').getBoundingClientRect();
// document.getElementById('bgtwo').style.top = bg.bottom - 300 + 'px';
// document.getElementById('bgtwo').style.height = bgEnd.bottom - bgtwo.y + 300 + 'px';

// function addBackgrounds() {
    //     window.scrollTo(0, 0);
    //     const bg = document.getElementById('about').getBoundingClientRect();
    //     const bgtwo = document.getElementById('projects').getBoundingClientRect();
    //     const bgEnd = document.getElementById('contact').getBoundingClientRect();
    //     document.getElementById('bgone').style.backgroundImage = "url('./images/bg.svg')";
    //     document.getElementById('bgtwo').style.backgroundImage = "url('./images/feather-bg.svg')";
    //     document.getElementById('bgtwo').style.top = bg.bottom - 300 + 'px';
    //     document.getElementById('bgtwo').style.height = bgEnd.bottom - bgtwo.y + 'px';
    // }
    
    
    // setTimeout(function () {
        //     const icon = document.getElementById('one');
        //     icon.style.marginLeft = '0%';
        // }, 500);
        
        // setTimeout(function () {
            //     let icon = document.getElementById('two');
            //     icon.style.marginLeft = '0%';
            // }, 1000);
            
            // setTimeout(function () {
                //     let icon = document.getElementById('three');
                //     icon.style.marginLeft = '0%';
                // }, 1500);
                
const iconParent = document.getElementById('icons');
const icons = iconParent.querySelectorAll('.icon-box');

// for (let i=0; i<icons.length; i++){
//     setTimeout(function() {
//         icons[i].classList.add('icon-intro');
//     }, 300);
// }

// document.documentElement.style.overflow = 'hidden';
// document.body.scroll = "no";

setTimeout(function() {
    
    // setTimeout(function() {
    //     document.getElementById('loading').style.transform = 'translateY(10%)';
    // }, 1000);
    // setTimeout(function() {
    //     document.getElementById('loading').style.transform = 'translateY(-110%)';
    // }, 1300);
    // setTimeout(function() {
        document.documentElement.style.overflow = 'auto'; 
        document.documentElement.style.overflowX = 'hidden'; 
        // document.body.scroll = "yes";
        document.getElementsByClassName('name-wrapper')[0].classList.add('intro');
        // clearInterval(dotFunc)
    // }, 1600);
    
}, 500);

// const dotFunc = setInterval(addDot, 450);


// const dots = document.getElementById('loading').querySelectorAll('.loading-text');
// let dotCount = 1;
// function addDot(){
//     if(dotCount === 4){
//         dotCount = 1;
//         return removeDots();
//     }
//     dots[dotCount].style.opacity = '1';
//     dotCount++;
// }

// function removeDots(){
//     dots.forEach((cur, idx) => {
//         if (idx === 0){ return }
//         cur.style.opacity = '0';
//     })
// }

const airbnb = ['https://dzwonsemrish7.cloudfront.net/items/191I0Z2T0K3n0l0c3g1H/Screen%20recording%202018-02-18%20at%2004.56.22%20PM.gif', 'https://dzwonsemrish7.cloudfront.net/items/1i0v2v313b2U1u1p1K2n/Screen%20recording%202018-02-18%20at%2004.50.57%20PM.gif', 'https://dzwonsemrish7.cloudfront.net/items/0M063z0P2G2c3o3z3A0O/Screen%20recording%202018-02-18%20at%2004.46.14%20PM.gif'];
const airbnbmobile = ['https://dzwonsemrish7.cloudfront.net/items/1t223Q3R2y0J2K430v0Z/Screen%20Recording%202018-04-02%20at%2011.31.22.23%20AM.gif', 'https://dzwonsemrish7.cloudfront.net/items/3w1z062j290i301l2o46/Screen%20Recording%202018-04-02%20at%2011.30.28.54%20AM.gif']
const goalbank = ['./images/goal-bank-1.PNG', './images/goal-bank-2.PNG'];
const travelcheap = ['./images/travel-1.PNG', './images/travel-2.PNG', './images/travel-3.PNG'];
const bedandbread = ["https://dzwonsemrish7.cloudfront.net/items/1c3U0t2V0I1N3A2r3p0K/Screen%20recording%202018-02-18%20at%2003.12.33%20PM.gif", "https://dzwonsemrish7.cloudfront.net/items/0z3K3X0s0n3a1j062316/Screen%20recording%202018-02-18%20at%2003.26.26%20PM.gif", "https://dzwonsemrish7.cloudfront.net/items/0D192v0f1R462W0L1u26/Screen%20Recording%202018-04-02%20at%2011.11.59.50%20AM.gif", "https://dzwonsemrish7.cloudfront.net/items/3c0R1P17072N053B3p0N/Screen%20Recording%202018-04-02%20at%2011.26.30.17%20AM.gif"];
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

function scrollAbout() {
    const about = document.getElementById("about");
    about.scrollIntoView({ behavior: "smooth", inline: "start" });
}

function scrollProjects() {
    const projects = document.getElementById("projects");
    projects.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollContact() {
    const contact = document.getElementById("contact");
    contact.scrollIntoView({ behavior: "smooth", inline: "start" });
}


window.addEventListener('scroll', scroll);
window.addEventListener('scroll', scrollActions);

function scroll(event){
    if (window.scrollY > bg.top - 100) {
        document.getElementById('scrollNav').style.transform = 'translateY(0)';
        document.getElementById('navName').style.transform = 'translateX(0)';
    } 
    else if (window.scrollY <= bg.top - 100) {
        document.getElementById('scrollNav').style.transform = 'translateY(-150%)';
        document.getElementById('navName').style.transform = 'translateX(-150%)';
    }
}

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
