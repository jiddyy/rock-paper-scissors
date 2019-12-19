let computerChoice = 0;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let gameText = document.getElementById("text");

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        computerChoice = "Rock";
        console.log("CPU chose Rock");
    } else if (random === 2) {
        computerChoice = "Paper";
        console.log("CPU chose Paper");
    } else {
        computerChoice = "Scissors";
        console.log("CPU chose Scissors");
    }
    rpsTextTransition();
}

function playGame() {
    getComputerChoice();
    rock.addEventListener("click", function () {
        console.log("User chose Rock");
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        if (computerChoice === "Paper") {
            gameText.textContent = "CPU Wins!";
        } else if (computerChoice === "Scissors") {
            gameText.textContent = "User Wins!";
        } else {
            gameText.textContent = "It's a tie!";
        }
        setInterval(function refreshAfterMoves() { window.location.reload(); }, 2500.);
    });
    paper.addEventListener("click", function () {
        console.log("User chose Paper");
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        if (computerChoice === "Scissors") {
            gameText.textContent = "CPU Wins!";
        } else if (computerChoice === "Rock") {
            gameText.textContent = "User Wins!";
        } else {
            gameText.textContent = "It's a tie!";
        }
        setInterval(function refreshAfterMoves() { window.location.reload(); }, 2500.);
    });
    scissors.addEventListener("click", function () {
        console.log("User chose Scissors");
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        if (computerChoice === "Rock") {
            gameText.textContent = "CPU Wins!";
        } else if (computerChoice === "Paper") {
            gameText.textContent = "User Wins!";
        } else {
            gameText.textContent = "It's a tie!";
        }
        setInterval(function refreshAfterMoves() { window.location.reload(); }, 2500.);
    });
}

function rpsTextTransition() {
    var ml4 = {};
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 300;
    ml4.durationOut = 300;
    ml4.delay = 450;

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    anime.timeline({ loop: false })
        .add({
            targets: '.ml4 .letters-1',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-1',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4 .letters-2',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-2',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4 .letters-3',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-3',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4 .letters-4',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-4',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4',
            opacity: 0,
            duration: 500,
            complete: function () {
                rock.disabled = false;
                paper.disabled = false;
                scissors.disabled = false;
            }
        });
}

playGame();