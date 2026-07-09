// =========================
// Loading Screen
// =========================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 800);

    }, 1800);
});


// ===========================
// Premium Love Counter
// ===========================

const relationshipDate = new Date("2026-01-10T00:00:00");

function updateLoveCounter(){

const now = new Date();

let years = now.getFullYear() - relationshipDate.getFullYear();
let months = now.getMonth() - relationshipDate.getMonth();
let days = now.getDate() - relationshipDate.getDate();

if(days < 0){
    months--;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
}

if(months < 0){
    years--;
    months += 12;
}

document.getElementById("years").textContent = years;
document.getElementById("months").textContent = months;
document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = now.getHours();
document.getElementById("minutes").textContent = now.getMinutes();
document.getElementById("seconds").textContent = now.getSeconds();

let nextAnniversary = new Date(now.getFullYear(),0,10);

if(now > nextAnniversary){
    nextAnniversary = new Date(now.getFullYear()+1,0,10);
}

const diff = nextAnniversary - now;

const d = Math.floor(diff/(1000*60*60*24));
const h = Math.floor(diff/(1000*60*60))%24;
const m = Math.floor(diff/(1000*60))%60;
const s = Math.floor(diff/1000)%60;

document.getElementById("anniversaryCountdown").innerHTML =
`${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;

}

setInterval(updateLoveCounter,1000);

updateLoveCounter();

// =========================
// Background Music
// =========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();
        musicBtn.innerHTML='<i class="fa-solid fa-music"></i>';

    }else{

        music.play();
        musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

    }

    playing=!playing;

});


// =========================
// Popup
// =========================

const popup=document.getElementById("popup");
const surpriseBtn=document.getElementById("surpriseBtn");
const closeBtn=document.getElementById("closePopup");

surpriseBtn.onclick=()=>{

    popup.style.display="flex";

}

closeBtn.onclick=()=>{

    popup.style.display="none";

}

window.onclick=(e)=>{

    if(e.target==popup){

        popup.style.display="none";

    }

}


// =========================
// Floating Hearts
// =========================

const hearts=document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("span");

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*6)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,300);


// =========================
// Smooth Fade-in Animation
// =========================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="1s";

    observer.observe(section);

});


// Romantic Intro

const intro = document.getElementById("intro");
const envelope = document.getElementById("openEnvelope");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        intro.classList.add("hideIntro");

        document.getElementById("bgMusic").play();

        playing = true;

        musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

    }, 1800);

});
