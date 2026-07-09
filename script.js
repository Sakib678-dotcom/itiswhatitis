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


// =========================
// Relationship Timer
// =========================

const startDate = new Date("January 10, 2026 00:00:00");

function updateTimer(){

    const now = new Date();

    let diff = now - startDate;

    if(diff < 0){
        diff = 0;
    }

    const totalMinutes = Math.floor(diff / 60000);
    const totalHours = Math.floor(diff / 3600000);
    const totalDays = Math.floor(diff / 86400000);

    const months = Math.floor(totalDays / 30);
    const days = totalDays % 30;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;

    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;

}

updateTimer();

setInterval(updateTimer,60000);


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