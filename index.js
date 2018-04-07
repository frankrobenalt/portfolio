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

for (let i=0; i<icons.length; i++){
    setTimeout(function() {
        icons[i].classList.add('intro');
    }, 300);
}

document.documentElement.style.overflow = 'hidden';
document.body.scroll = "no";

setTimeout(function() {
    
    setTimeout(function() {
        document.getElementById('loading').style.transform = 'translateY(10%)';
    }, 1000);
    setTimeout(function() {
        document.getElementById('loading').style.transform = 'translateY(-110%)';
    }, 1300);
    setTimeout(function() {
        document.documentElement.style.overflow = 'auto'; 
        document.documentElement.style.overflowX = 'hidden'; 
        document.body.scroll = "yes";
        document.getElementsByClassName('name-wrapper')[0].classList.add('intro');
        document.getElementById('icons').classList.remove('before');
        document.getElementById('icons').classList.add('intro');
        clearInterval(dotFunc)
    }, 1600);
    
}, 3000);

const dotFunc = setInterval(addDot, 250);


const dots = document.getElementById('loading').querySelectorAll('.loading-text');
let dotCount = 1;
function addDot(){
    if(dotCount === 4){
        dotCount = 1;
        return removeDots();
    }
    dots[dotCount].style.opacity = '1';
    dotCount++;
}

function removeDots(){
    dots.forEach((cur, idx) => {
        if (idx === 0){ return }
        cur.style.opacity = '0';
    })
}

const airbnb = ["https://d2ffutrenqvap3.cloudfront.net/items/0M063z0P2G2c3o3z3A0O/Screen%20recording%202018-02-18%20at%2004.46.14%20PM.gif", "https://d2ffutrenqvap3.cloudfront.net/items/2x0n11183C3G2x2E2w1W/Screen%20recording%202018-02-18%20at%2004.49.40%20PM.gif", "https://d2ffutrenqvap3.cloudfront.net/items/1i0v2v313b2U1u1p1K2n/Screen%20recording%202018-02-18%20at%2004.50.57%20PM.gif", "https://d2ffutrenqvap3.cloudfront.net/items/1i0v2v313b2U1u1p1K2n/Screen%20recording%202018-02-18%20at%2004.50.57%20PM.gif"];
const airbnbmobile = ['https://d2ffutrenqvap3.cloudfront.net/items/3w1z062j290i301l2o46/Screen%20Recording%202018-04-02%20at%2011.30.28.54%20AM.gif', 'https://d2ffutrenqvap3.cloudfront.net/items/1t223Q3R2y0J2K430v0Z/Screen%20Recording%202018-04-02%20at%2011.31.22.23%20AM.gif']
const goalbank = ['./images/goal-bank-1.PNG', './images/goal-bank-2.PNG'];
const travelcheap = ['./images/travel-1.PNG', './images/travel-2.PNG', './images/travel-3.PNG'];
const bedandbread = ["https://d2ffutrenqvap3.cloudfront.net/items/1c3U0t2V0I1N3A2r3p0K/Screen%20recording%202018-02-18%20at%2003.12.33%20PM.gif", "https://d2ffutrenqvap3.cloudfront.net/items/0D192v0f1R462W0L1u26/Screen%20Recording%202018-04-02%20at%2011.11.59.50%20AM.gif", "https://d2ffutrenqvap3.cloudfront.net/items/3c0R1P17072N053B3p0N/Screen%20Recording%202018-04-02%20at%2011.26.30.17%20AM.gif", "https://d2ffutrenqvap3.cloudfront.net/items/442C1l141y3L2e1M0z1k/Screen%20recording%202018-02-18%20at%2003.14.35%20PM.gif", "https://d2ffutrenqvap3.cloudfront.net/items/2o0p2y471y3p2x1D3f3k/Screen%20recording%202018-03-01%20at%2012.10.02%20PM.gif", "https://d2ffutrenqvap3.cloudfront.net/items/191Y1l2b0e393P3E3K42/Screen%20recording%202018-03-01%20at%2012.11.14%20PM.gif", "https://d2ffutrenqvap3.cloudfront.net/items/0i44431K0n231u1y3Y1X/Screen%20recording%202018-02-18%20at%2003.15.57%20PM.gif", "https://d2ffutrenqvap3.cloudfront.net/items/0z3K3X0s0n3a1j062316/Screen%20recording%202018-02-18%20at%2003.26.26%20PM.gif"];
const bedandbreadmobile = ['https://d2ffutrenqvap3.cloudfront.net/items/3u2M0Z27450t000A1X09/Screen%20recording%202018-03-11%20at%2007.08.08%20PM.gif', 'https://d2ffutrenqvap3.cloudfront.net/items/3M2d1m1b0e3Y2Y1o1p3u/Screen%20recording%202018-03-11%20at%2007.14.06%20PM.gif'];
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
    if (window.scrollY > bg.top - 200) {
        document.getElementById('scrollNav').style.padding = '0px';
        document.getElementById('navName').style.opacity = '1';
    } 
    else if (window.scrollY <= bg.top - 200) {
        document.getElementById('scrollNav').style.padding = '10px'; 
        document.getElementById('navName').style.opacity = '0';
    }
}

const gifContainers = body.querySelectorAll('.pics-container')
let gifContainerTops = [];
gifContainers.forEach((cur, idx)=>{
    console.log(cur.getBoundingClientRect())
    gifContainerTops.push(cur.getBoundingClientRect().top);
})
const height = window.innerHeight;
console.log(gifContainerTops);

function scrollActions(event){
    if (window.scrollY > gifContainerTops[3] - (height/(1.33))){
                gifContainers[3].style.transform = 'translateY(0px)';
                gifContainers[3].style.opacity = '1';
    } else if (window.scrollY > gifContainerTops[2] - (height/(1.33))){
        gifContainers[2].style.transform = 'translateY(0px)';
        gifContainers[2].style.opacity = '1';
    } else if (window.scrollY > gifContainerTops[1] - (height/(1.33))){
        gifContainers[1].style.transform = 'translateY(0px)';
        gifContainers[1].style.opacity = '1';
    } else if (window.scrollY > gifContainerTops[0] - (height/(1.33))){
        gifContainers[0].style.transform = 'translateY(0px)';
        gifContainers[0].style.opacity = '1';
    }
}
