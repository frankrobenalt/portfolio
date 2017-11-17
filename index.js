let airbnb = ['./images/air-bnb-1.PNG', './images/air-bnb-2.PNG', './images/air-bnb-3.PNG'];
let goalbank = ['./images/goal-bank-1.PNG', './images/goal-bank-2.PNG'];
let travelcheap = ['./images/travel-1.PNG', './images/travel-2.PNG', './images/travel-3.PNG'];
let airbnbcount = 0;
let goalbankcount = 0;
let travelcount = 0;
document.getElementById('airbnb').src = airbnb[2];
document.getElementById('goalbank').src = goalbank[airbnbcount];
document.getElementById('travelcheap').src = travelcheap[airbnbcount];


function addcarousel(str) {
    if (str === 'airbnb'){
    airbnbcount === airbnb.length - 1 ? airbnbcount = 0 : airbnbcount++;
    document.getElementById(str).src = airbnb[airbnbcount];
    } else if (str === 'goalbank') {
        goalbankcount === goalbank.length - 1 ? goalbankcount = 0 : goalbankcount++;
        document.getElementById(str).src = goalbank[goalbankcount];
    } else if (str === 'travelcheap') {
        travelcount === travelcheap.length - 1 ? travelcount = 0 : travelcount++;
        document.getElementById(str).src = travelcheap[travelcount];
    }
}

function subtractcarousel(str) {
    if (str === 'airbnb'){
    airbnbcount === 0 ? airbnbcount = airbnb.length - 1 : airbnbcount--;
    document.getElementById(str).src = airbnb[airbnbcount];
    } else if (str === 'goalbank') {
        goalbankcount === 0 ? goalbankcount = goalbank.length - 1 : goalbankcount--;
        document.getElementById(str).src = goalbank[goalbankcount];
    } else if (str === 'travelcheap') {
        travelcount === 0 ? travelcount = travelcheap.length - 1 : travelcount--;
        document.getElementById(str).src = travelcheap[travelcount];
    }
}

function scrollAbout(){
    const about = document.getElementById("about");
    about.scrollIntoView({behavior: "smooth", inline: "start"});
}

function scrollProjects(){
    const projects = document.getElementById("projects");
    projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollContact(){
    const contact = document.getElementById("contact");
    contact.scrollIntoView({behavior: "smooth", inline: "start"});
}

window.addEventListener('scroll', scroll);

function scroll(event){
    // const about = document.getElementById('about')
    // const aboutDimensions = about.getBoundingClientRect();
    // const icons = document.getElementById('icons')
    // const iconsDimensions = icons.getBoundingClientRect();
    // aboutDimensions.top - 10 < iconsDimensions.top ? icons.style.display = 'none' : icons.style.display = 'flex'
}

