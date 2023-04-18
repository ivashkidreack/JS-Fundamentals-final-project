const gameLink = document.querySelector(".game-page");
const settingsLink = document.querySelector(".settings-page");
const tutorialLink = document.querySelector(".tutorial-page");

function updateGameContent(content) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', content, true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        document.querySelector(".game__container").innerHTML = xhr.responseText;
        }
    };
    
    xhr.send();
};

gameLink.addEventListener("click", function() {
    updateGameContent("game.html");
});
settingsLink.addEventListener("click", function() {
    updateGameContent("settings.html");
});
tutorialLink.addEventListener("click", function() {
    updateGameContent("tutor.html");
});
