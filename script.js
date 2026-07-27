/* =====================================
   FRIEND SURPRISE WEBSITE
   script.js - Part 1
===================================== */


/* ========= SETTINGS ========= */

// Change Surprise Date & Time

const surpriseDate = new Date(
    "july 26, 2026 10:08:00"
).getTime();


// Change Password

const secretPassword = "cc.anya04";


/* ========= ELEMENTS ========= */

const countdownSection =
document.getElementById("countdownSection");

const passwordSection =
document.getElementById("passwordSection");

const surpriseSection =
document.getElementById("surpriseSection");


const days =
document.getElementById("days");

const hours =
document.getElementById("hours");

const minutes =
document.getElementById("minutes");

const seconds =
document.getElementById("seconds");


const passwordInput =
document.getElementById("password");

const unlockBtn =
document.getElementById("unlockBtn");

const error =
document.getElementById("error");


/* ========= COUNTDOWN ========= */

function updateCountdown(){

    const now =
    new Date().getTime();

    const distance =
    surpriseDate - now;


    if(distance <= 0){

        clearInterval(timer);

        // Hide Countdown

        countdownSection.style.display =
        "none";

        // Show Password

        passwordSection.classList.remove(
        "hidden"
        );

        passwordSection.style.display =
        "flex";

        return;

    }


    const day =
    Math.floor(
    distance /
    (1000*60*60*24)
    );

    const hour =
    Math.floor(
    (distance %
    (1000*60*60*24))
    /
    (1000*60*60)
    );

    const minute =
    Math.floor(
    (distance %
    (1000*60*60))
    /
    (1000*60)
    );

    const second =
    Math.floor(
    (distance %
    (1000*60))
    /
    1000
    );


    days.innerHTML =
    String(day).padStart(2,"0");

    hours.innerHTML =
    String(hour).padStart(2,"0");

    minutes.innerHTML =
    String(minute).padStart(2,"0");

    seconds.innerHTML =
    String(second).padStart(2,"0");

}


const timer =
setInterval(
updateCountdown,
1000
);

updateCountdown();
/* =====================================
   FRIEND SURPRISE WEBSITE
   script.js - Part 2
===================================== */


/* ========= PASSWORD SYSTEM ========= */

unlockBtn.addEventListener("click", unlockSurprise);

passwordInput.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        unlockSurprise();

    }

});


function unlockSurprise(){

    const userPassword =
    passwordInput.value.trim();


    if(userPassword === secretPassword){

        // Hide Password Section

        passwordSection.classList.add(
        "hidden"
        );

        passwordSection.style.display =
        "none";


        // Show Surprise Section

        surpriseSection.classList.remove(
        "hidden"
        );

        surpriseSection.style.display =
        "block";


        // Clear Error

        error.innerHTML = "";


        // Start Effects

        typingEffect();

        startHearts();

        startBalloons();

        startFireworks();


    }

    else{

        error.innerHTML =
        "❌ Wrong Password!";

        passwordInput.value = "";

        passwordInput.focus();

    }

}


/* ========= GIFT BOX ========= */

/* ========= GIFT BOX ========= */

const giftBox =
document.getElementById("giftBox");


const giftContent =
document.getElementById("giftContent");


if(giftBox){

giftBox.addEventListener("click", function(){


    giftBox.style.transform =
    "scale(1.15) rotate(10deg)";


    setTimeout(function(){


        giftBox.style.display =
        "none";


        if(giftContent){

            giftContent.classList.remove(
            "hidden"
            );

            giftContent.classList.add(
            "fade-in"
            );

        }


        startConfetti();


    },700);


});

}


/* ========= MUSIC ========= */

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

let musicPlaying = false;


if(musicBtn){

musicBtn.addEventListener("click", function(){

    if(!musicPlaying){

        music.play();

        musicBtn.innerHTML =
        "⏸ Pause Music";

        musicPlaying = true;

    }

    else{

        music.pause();

        musicBtn.innerHTML =
        "🎵 Play Music";

        musicPlaying = false;

    }

});

}
/* =====================================
   FRIEND SURPRISE WEBSITE
   script.js - Part 3
===================================== */


/* ========= FLOATING HEARTS ========= */

function startHearts(){

    const hearts =
    document.getElementById("hearts");

    if(!hearts) return;

    setInterval(function(){

        const heart =
        document.createElement("div");

        heart.className =
        "heart";

        heart.innerHTML =
        "❤️";

        heart.style.left =
        Math.random()*100 + "%";

        heart.style.fontSize =
        (20 + Math.random()*25) + "px";

        heart.style.animationDuration =
        (4 + Math.random()*4) + "s";

        hearts.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },8000);

    },300);

}


/* ========= FLOATING BALLOONS ========= */

function startBalloons(){

    const balloons =
    document.getElementById("balloons");

    if(!balloons) return;

    const colors=[

        "#ff4d88",
        "#4dabf7",
        "#51cf66",
        "#ffd43b",
        "#845ef7",
        "#ff922b"

    ];

    setInterval(function(){

        const balloon =
        document.createElement("div");

        balloon.className =
        "balloon";

        balloon.style.left =
        Math.random()*100 + "%";

        balloon.style.background =
        colors[
        Math.floor(
        Math.random()*colors.length
        )
        ];

        balloon.style.animationDuration =
        (6 + Math.random()*4) + "s";

        balloons.appendChild(balloon);

        setTimeout(function(){

            balloon.remove();

        },10000);

    },900);

}


/* ========= TYPING EFFECT ========= */

const typingText =
"Happy Friendship ❤️";

function typingEffect(){

    const title =
    document.querySelector(".typing");

    if(!title) return;

    title.innerHTML = "";

    let i = 0;

    const typing =
    setInterval(function(){

        title.innerHTML +=
        typingText.charAt(i);

        i++;

        if(i >= typingText.length){

            clearInterval(typing);

        }

    },100);

}


/* ========= IMAGE POPUP ========= */

const galleryImages =
document.querySelectorAll(".gallery img");

galleryImages.forEach(function(img){

    img.addEventListener("click",function(){

        const popup =
        document.createElement("div");

        popup.className =
        "image-popup";

        const image =
        document.createElement("img");

        image.src =
        img.src;

        popup.appendChild(image);

        document.body.appendChild(popup);

        popup.addEventListener("click",function(){

            popup.remove();

        });

    });

});
/* =====================================
   FRIEND SURPRISE WEBSITE
   script.js - Part 4 (Final)
===================================== */


/* ========= RANDOM COLOR ========= */

function randomColor(){

    const colors=[

        "#ff4d88",
        "#ffd43b",
        "#51cf66",
        "#4dabf7",
        "#845ef7",
        "#ff922b"

    ];

    return colors[
        Math.floor(
            Math.random()*colors.length
        )
    ];

}


/* ========= CONFETTI ========= */

function startConfetti(){

    const canvas =
    document.getElementById("confetti");

    if(!canvas) return;

    const ctx =
    canvas.getContext("2d");

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

    let pieces=[];

    for(let i=0;i<120;i++){

        pieces.push({

            x:Math.random()*canvas.width,

            y:Math.random()*canvas.height-canvas.height,

            size:Math.random()*8+4,

            speed:Math.random()*3+2,

            color:randomColor()

        });

    }

    function animate(){

        ctx.clearRect(
        0,0,
        canvas.width,
        canvas.height
        );

        pieces.forEach(function(p){

            ctx.fillStyle =
            p.color;

            ctx.fillRect(
            p.x,
            p.y,
            p.size,
            p.size
            );

            p.y += p.speed;

            if(p.y>canvas.height){

                p.y=-20;

                p.x=Math.random()*canvas.width;

            }

        });

        requestAnimationFrame(
        animate
        );

    }

    animate();

}


/* ========= FIREWORKS ========= */

function startFireworks(){

    const canvas =
    document.getElementById("fireworks");

    if(!canvas) return;

    const ctx =
    canvas.getContext("2d");

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

    setInterval(function(){

        const x =
        Math.random()*canvas.width;

        const y =
        Math.random()*
        (canvas.height/2);

        const color =
        randomColor();

        ctx.beginPath();

        ctx.arc(
        x,
        y,
        5,
        0,
        Math.PI*2
        );

        ctx.fillStyle =
        color;

        ctx.fill();

        setTimeout(function(){

            ctx.clearRect(
            x-80,
            y-80,
            160,
            160
            );

        },500);

    },350);

}


/* ========= WINDOW RESIZE ========= */

window.addEventListener(
"resize",
function(){

    const confetti =
    document.getElementById("confetti");

    const fireworks =
    document.getElementById("fireworks");

    if(confetti){

        confetti.width =
        window.innerWidth;

        confetti.height =
        window.innerHeight;

    }

    if(fireworks){

        fireworks.width =
        window.innerWidth;

        fireworks.height =
        window.innerHeight;

    }

});


/* ========= AUTO START ========= */

window.addEventListener(
"load",
function(){

    updateCountdown();

});