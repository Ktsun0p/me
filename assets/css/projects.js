
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    card.addEventListener("click", function () {
        if (card.id === "cake-bot") {
            window.open("../../cakebot/", "_blank");
        }
        if (card.id === "toto-bot") {
            window.open("../../totobot/", "_blank");
        }
        if (card.id === "lol-api") {
            window.open("../../lol-api.html", "_blank");
        }
    });
});

