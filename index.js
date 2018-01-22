window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const bg = document.getElementById('about').getBoundingClientRect();
const bgtwo = document.getElementById('projects').getBoundingClientRect();
const bgEnd = document.getElementById('contact').getBoundingClientRect();
document.getElementById('bgtwo').style.top = bg.bottom - 300 + 'px';
document.getElementById('bgtwo').style.height = bgEnd.bottom - bgtwo.y + 300 + 'px';

function addBackgrounds() {
    window.scrollTo(0, 0);
    const bg = document.getElementById('about').getBoundingClientRect();
    const bgtwo = document.getElementById('projects').getBoundingClientRect();
    const bgEnd = document.getElementById('contact').getBoundingClientRect();
    document.getElementById('bgone').style.backgroundImage = "url('./images/bg.svg')";
    document.getElementById('bgtwo').style.backgroundImage = "url('./images/feather-bg.svg')";
    document.getElementById('bgtwo').style.top = bg.bottom - 300 + 'px';
    document.getElementById('bgtwo').style.height = bgEnd.bottom - bgtwo.y + 'px';
}


setTimeout(function () {
    const icon = document.getElementById('one');
    icon.style.marginLeft = '0%';
}, 500);

setTimeout(function () {
    let icon = document.getElementById('two');
    icon.style.marginLeft = '0%';
}, 1000);

setTimeout(function () {
    let icon = document.getElementById('three');
    icon.style.marginLeft = '0%';
}, 1500);

const airbnb = ['./images/air-bnb-3.PNG', './images/air-bnb-2.PNG', './images/air-bnb-1.PNG'];
const goalbank = ['./images/goal-bank-1.PNG', './images/goal-bank-2.PNG'];
const travelcheap = ['./images/travel-1.PNG', './images/travel-2.PNG', './images/travel-3.PNG'];
let airbnbcount = 0;
let goalbankcount = 0;
let travelcount = 0;
document.getElementById('airbnb').src = airbnb[0];
document.getElementById('goalbank').src = goalbank[airbnbcount];
document.getElementById('travelcheap').src = travelcheap[airbnbcount];

function addcarousel(str) {
    if (str === 'airbnb') {
        airbnbcount === airbnb.length - 1 ? airbnbcount = 0 : airbnbcount++;
        document.getElementById(str).style.opacity = '0';
        setTimeout(function () {
            document.getElementById(str).src = airbnb[airbnbcount];
        }, 351);
        setTimeout(function () {
            document.getElementById(str).style.opacity = '1';
        }, 400);
    } else if (str === 'goalbank') {
        goalbankcount === goalbank.length - 1 ? goalbankcount = 0 : goalbankcount++;
        document.getElementById(str).style.opacity = '0';
        setTimeout(function () {
            document.getElementById(str).src = goalbank[goalbankcount];
        }, 351);
        setTimeout(function () {
            document.getElementById(str).style.opacity = '1';
        }, 400);
    } else if (str === 'travelcheap') {
        travelcount === travelcheap.length - 1 ? travelcount = 0 : travelcount++;
        document.getElementById(str).style.opacity = '0';
        setTimeout(function () {
            document.getElementById(str).src = travelcheap[travelcount];
        }, 351);
        setTimeout(function () {
            document.getElementById(str).style.opacity = '1';
        }, 400);
    }
}

function subtractcarousel(str) {
    if (str === 'airbnb') {
        airbnbcount === 0 ? airbnbcount = airbnb.length - 1 : airbnbcount--;
        document.getElementById(str).style.opacity = '0';
        setTimeout(function () {
            document.getElementById(str).src = airbnb[airbnbcount];
        }, 351);
        setTimeout(function () {
            document.getElementById(str).style.opacity = '1';
        }, 400);
    } else if (str === 'goalbank') {
        goalbankcount === 0 ? goalbankcount = goalbank.length - 1 : goalbankcount--;
        document.getElementById(str).style.opacity = '0';
        setTimeout(function () {
            document.getElementById(str).src = goalbank[goalbankcount];
        }, 351);
        setTimeout(function () {
            document.getElementById(str).style.opacity = '1';
        }, 400);
    } else if (str === 'travelcheap') {
        travelcount === 0 ? travelcount = travelcheap.length - 1 : travelcount--;
        document.getElementById(str).style.opacity = '0';

        setTimeout(function () {
            document.getElementById(str).src = travelcheap[travelcount];
        }, 351);
        setTimeout(function () {
            document.getElementById(str).style.opacity = '1';
        }, 400);
    }
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

const header = document.getElementById('name').getBoundingClientRect();
console.log(header);

function scroll(event){
    if (window.scrollY > bg.top - 100) {
        document.getElementById('scrollNav').style.transform = 'translateY(0px)';
        document.getElementById('scrollNav').classList.add('shadow');        
    } 
    else if (window.scrollY <= bg.top - 100) {
        document.getElementById('scrollNav').style.transform = 'translateY(-70px)'; 
        document.getElementById('scrollNav').classList.remove('shadow');                
    } 
}

