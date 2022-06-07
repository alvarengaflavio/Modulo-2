const resposta = Math.floor(Math.random() * 10 + 1);
let palpites = 0;

document.getElementById('submitButton').onclick = function () {
    let palpite = document.getElementById('guessField').value;
    palpites += 1;

    let msg = `Algo de errado não está certo!`;

    if (palpite == resposta) {
        msg = `O # era o ${resposta}! Você precisou de ${palpites} palpites.`;
    } else if (palpite < resposta) {
        msg = 'Muito pequeno!!!';
    } else if (palpite > resposta) {
        msg = 'Muito grande!!!';
    }
    alert(msg);
};
