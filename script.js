let player1_Score, player2_Score;
play();
document.querySelector('#btn-in').addEventListener('click', play)



async function play(){

    let delay = [100, 150, 200, 250, 300, 350, 400, 500];
    for (let i = 0; i < delay.length; i++){
        rollDice();
        await sleep(delay[i]);
    }
    
    await sleep(600);
    [player1_Score, player2_Score] = rollDice();
    winner = decideWinner(player1_Score, player2_Score);
    await sleep(500);
    displayWinner(winner);
}

function rollDice() {
    let random_number_1 = Math.ceil(Math.random() * 6);
    let img1 = document.querySelector(".img1");
    img1.src = `images/dice${random_number_1}.png`;

    let random_number_2 = Math.ceil(Math.random() * 6);
    let img2 = document.querySelector(".img2");
    img2.src = `images/dice${random_number_2}.png`;

    return [random_number_1, random_number_2];
}

function decideWinner(player1_Score, player2_Score){
    if (player1_Score === player2_Score) return "Draw";
    return (player1_Score > player2_Score) ? '🚩 Player 1 wins' : 'Player 2 wins 🚩';
}

function displayWinner(winner){
    win = document.querySelector("#winner");
    win.textContent = winner;
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}