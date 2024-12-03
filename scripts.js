const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let p1Score = document.querySelector('.p1 .score');
let p2Score = document.querySelector('.p2 .score');

const reset = document.getElementById('reset');
const newbtn = document.getElementById('new-btn');

const msgnew = document.querySelector('.msgnew');
const msg = document.getElementById('msg');
const lighting = document.querySelector('.lighting');
const resbox = document.querySelector(".resbox");

let you = 0, bot = 0;
let ct = 1;

const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");
const tapSound = document.getElementById("tapSound");
const resetSound = document.getElementById("resetSound");

function playFinalSound() {
    if (you === 5) {
        winSound.play();  
    } else if (bot === 5) {
        loseSound.play(); 
    }
}

rock.addEventListener("click", () => {
    tapSound.pause();
    tapSound.currentTime = 0;
    tapSound.play();
    let botnum = Math.floor(Math.random() * 3) + 1;
    if (botnum == 1) {
        resbox.textContent = ct + " - It's a Tie! bot also chose rock.";
        resbox.classList.add("resboxtie");
        resbox.classList.remove("resboxlose");
        resbox.classList.remove("resboxwin");
        lighting.classList.add("tie");
        lighting.classList.remove("win");
        lighting.classList.remove("lose");
    } else if (botnum == 2) {
        resbox.textContent = ct + " - You Lose! bot chose paper.";
        resbox.classList.add("resboxlose");
        resbox.classList.remove("resboxtie");
        resbox.classList.remove("resboxwin");
        lighting.classList.add("lose");
        lighting.classList.remove("win");
        lighting.classList.remove("tie");
        bot += 1;
    } else {
        resbox.textContent = ct + " - You Won! bot chose scissors.";
        resbox.classList.add("resboxwin");
        resbox.classList.remove("resboxlose");
        resbox.classList.remove("resboxtie");
        lighting.classList.add("win");
        lighting.classList.remove("lose");
        lighting.classList.remove("tie");
        you += 1;
    }


    p1Score.textContent = you;
    p2Score.textContent = bot;


    if (you >= 5 || bot >= 5) {
        msgnew.classList.remove("hide");
        if (you >= 5) {
            msgnew.classList.add("jeetacolour");
            msgnew.classList.remove("haracolour");
        } else {
            msgnew.classList.add("haracolour");
            msgnew.classList.remove("jeetacolour");
        }
        msg.textContent = you > bot ? "Congratulations 🎉 You won!" : "Better Luck Next Time! 😔";
        playFinalSound(); 
    }
    ct++;
});


paper.addEventListener("click", () => {
    tapSound.pause();
    tapSound.currentTime = 0;
    tapSound.play();
    let botnum = Math.floor(Math.random() * 3) + 1;
    if (botnum == 1) {
        resbox.textContent = ct + " - You Won! bot chose rock.";
        resbox.classList.add("resboxwin");
        resbox.classList.remove("resboxlose");
        resbox.classList.remove("resboxtie");
        lighting.classList.add("win");
        lighting.classList.remove("lose");
        lighting.classList.remove("tie");
        you += 1;
    } else if (botnum == 2) {
        resbox.textContent = ct + " - It's a Tie! bot also chose paper.";
        resbox.classList.add("resboxtie");
        resbox.classList.remove("resboxlose");
        resbox.classList.remove("resboxwin");
        lighting.classList.add("tie");
        lighting.classList.remove("win");
        lighting.classList.remove("lose");
    } else {
        resbox.textContent = ct + " - You Lose! bot chose scissors.";
        resbox.classList.add("resboxlose");
        resbox.classList.remove("resboxtie");
        resbox.classList.remove("resboxwin");
        lighting.classList.add("lose");
        lighting.classList.remove("win");
        lighting.classList.remove("tie");
        bot += 1;
    }


    p1Score.textContent = you;
    p2Score.textContent = bot;


    if (you >= 5 || bot >= 5) {
        msgnew.classList.remove("hide");
        if (you >= 5) {
            msgnew.classList.add("jeetacolour");
            msgnew.classList.remove("haracolour");
        } else {
            msgnew.classList.add("haracolour");
            msgnew.classList.remove("jeetacolour");
        }
        msg.textContent = you > bot ? "Congratulations 🎉 You won!" : "Better Luck Next Time! 😔";
        playFinalSound(); 
    }
    ct++;
});


scissors.addEventListener("click", () => {
    tapSound.pause();
    tapSound.currentTime = 0;
    tapSound.play();
    let botnum = Math.floor(Math.random() * 3) + 1;
    if (botnum == 1) {
        resbox.textContent = ct + " - You Lose! bot chose rock.";
        resbox.classList.add("resboxlose");
        resbox.classList.remove("resboxtie");
        resbox.classList.remove("resboxwin");
        lighting.classList.add("lose");
        lighting.classList.remove("win");
        lighting.classList.remove("tie");
        bot += 1;
    } else if (botnum == 2) {
        resbox.textContent = ct + " - You Won! bot chose paper.";
        resbox.classList.add("resboxwin");
        resbox.classList.remove("resboxlose");
        resbox.classList.remove("resboxtie");
        lighting.classList.add("win");
        lighting.classList.remove("lose");
        lighting.classList.remove("tie");
        you += 1;
    } else {
        resbox.textContent = ct + " - It's a Tie! bot also chose scissors.";
        resbox.classList.add("resboxtie");
        resbox.classList.remove("resboxlose");
        resbox.classList.remove("resboxwin");
        lighting.classList.add("tie");
        lighting.classList.remove("win");
        lighting.classList.remove("lose");
    }


    p1Score.textContent = you;
    p2Score.textContent = bot;


    if (you >= 5 || bot >= 5) {
        msgnew.classList.remove("hide");
        if (you >= 5) {
            msgnew.classList.add("jeetacolour");
            msgnew.classList.remove("haracolour");
        } else {
            msgnew.classList.add("haracolour");
            msgnew.classList.remove("jeetacolour");
        }
        msg.textContent = you > bot ? "Congratulations 🎉 You won!" : "Better Luck Next Time! 😔";
        playFinalSound();
    }
    ct++;
});


reset.addEventListener('click', () => {
    resetSound.pause();
    resetSound.currentTime = 0;
    resetSound.play();
    you = 0;
    bot = 0;
    ct=1;
    p1Score.textContent = '-';
    p2Score.textContent = '-';
    resbox.textContent = "PICK OUT OF THREE ABOVE";
    resbox.classList.remove("resboxtie");
    resbox.classList.remove("resboxlose");
    resbox.classList.remove("resboxwin");
    lighting.classList.remove("win");
    lighting.classList.remove("lose");
    lighting.classList.remove("tie");
});


newbtn.addEventListener('click', () => {
    resetSound.pause();
    resetSound.currentTime = 0;
    resetSound.play();
    winSound.pause();
    loseSound.pause();
    winSound.currentTime = 0;
    loseSound.currentTime = 0;

    msgnew.classList.add("hide");
    you = 0;
    bot = 0;
    ct=1;
    p1Score.textContent = '-';
    p2Score.textContent = '-';
    resbox.textContent = "PICK OUT OF THREE ABOVE";
    resbox.classList.remove("resboxtie");
    resbox.classList.remove("resboxlose");
    resbox.classList.remove("resboxwin");
    lighting.classList.remove("win");
    lighting.classList.remove("lose");
    lighting.classList.remove("tie");
});


const portfolio = document.getElementById('port');

    portfolio.addEventListener('click', () => {
        window.open('https://sudhaanshu94.github.io/Portfolio_Sudhanshu/', '_blank');
    });
