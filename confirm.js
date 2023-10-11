
document.addEventListener("DOMContentLoaded", function () {
    const cardPage = document.getElementById("card_page");
    const thankYouPage = document.getElementById("Thank_you_page");
    const confirmButton = document.getElementById("confirm_button");
    const continueButton = document.getElementById("continue_button");

    confirmButton.addEventListener("click", function () {
        cardPage.style.display = "none";
        thankYouPage.style.display = "block";
    });

    continueButton.addEventListener("click", function () {
        cardPage.style.display = "block";
        thankYouPage.style.display = "none";
    });
});
