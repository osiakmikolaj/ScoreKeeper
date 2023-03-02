const winNumSelect = document.querySelector("#num");

const p1 = {
    score: 0,
    button: document.querySelector("#p1Btn"),
    display: document.querySelector("#p1"),
};

const p2 = {
    score: 0,
    button: document.querySelector("#p2Btn"),
    display: document.querySelector("#p2"),
};

const resetBtn = document.querySelector("#resetScore");

p1.display.innerText = "0";
p2.display.innerText = "0";

let winNum = parseInt(winNumSelect.value);

winNumSelect.addEventListener("change", () => {
    winNum = parseInt(winNumSelect.value);
});

p1.button.addEventListener("click", () => {
    updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
    updateScores(p2, p1);
});

resetBtn.addEventListener("click", () => {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = "0";
        p.button.disabled = false;
        p.display.className = "";
    }
});

function updateScores(player, opponent) {
    player.score += 1;
    if (player.score === winNum) {
        player.display.className = "win";
        opponent.display.className = "lost";
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.innerText = player.score;
}
