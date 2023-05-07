window.onload = function () {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById("your-name").value;
    let petName = document.getElementById("pet-name").value;

    if (yourName != "" && petName != "") {
        let percentage = Math.floor(Math.random() * 101);

        document.getElementById("result-message").innerText = yourName + " and " + petName + "'s amount of love:";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    }
}