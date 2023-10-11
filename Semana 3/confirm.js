document.addEventListener("DOMContentLoaded", function () {
    // Selecione os elementos das divs e o botão "Confirm"
    var cardPage = document.getElementById("main_text_container");
    var thankYouPage = document.getElementById("Thank_you_page");
    var confirmButton = document.getElementById("confirm_button");

    // Adicione um ouvinte de evento de clique ao botão "Confirm"
    confirmButton.addEventListener("click", function () {
        // Oculte a página principal e mostre a página de agradecimento
        if (cardPage.style.display !== "none") {
            cardPage.style.display = "none";
            div2.style.display = "grid";
        } else {
            cardPage.style.display = "none";
            thankYouPage.style.display = "grid";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById("number");
    const cardMainNumber = document.getElementById("card_main_number");
    const cardNameInput = document.getElementById("ch_name");
    const cardName = document.getElementById("card_name");
    const cardExpiration = document.getElementById("card_expiration");
    const cardCVC = document.getElementById("card_back_cvc");

    cardNumberInput.addEventListener("input", function () {
        cardMainNumber.textContent = formatCardNumber(cardNumberInput.value);
    });

    cardNameInput.addEventListener("input", function () {
        cardName.textContent = cardNameInput.value;
    });

    const expMonthInput = document.getElementById("exp_month");
    const expYearInput = document.getElementById("exp_year");

    expMonthInput.addEventListener("input", updateCardExpiration);
    expYearInput.addEventListener("input", updateCardExpiration);

    function updateCardExpiration() {
        const month = expMonthInput.value.padStart(2, "MM");
        const year = expYearInput.value.padStart(2, "YY");
        cardExpiration.textContent = `${month}/${year}`;
    }

    const cvcInput = document.getElementById("cvc");

    cvcInput.addEventListener("input", function () {
        cardCVC.textContent = cvcInput.value;
    });

    function formatCardNumber(cardNumber) {
        return cardNumber.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById("number");
    const cardMainNumber = document.getElementById("card_main_number");
    const cardNameInput = document.getElementById("ch_name");
    const cardName = document.getElementById("card_name");
    const cardExpirationMonth = document.getElementById("card_expiration_month");
    const cardExpirationYear = document.getElementById("card_expiration_year");
    const cardCVC = document.getElementById("card_back_cvc");

    const formatNumberError = document.getElementById("format_number");
    const blankNumberError = document.getElementById("blank_number");
    const blankNameError = document.getElementById("blank_ch_name");
    const formatMonthError = document.getElementById("format_month");
    const blankMonthError = document.getElementById("blank_month");
    const formatYearError = document.getElementById("format_year");
    const blankYearError = document.getElementById("blank_year");
    const formatCvcError = document.getElementById("format_cvc");
    const blankCvcError = document.getElementById("blank_cvc");

    cardNumberInput.addEventListener("input", function () {
        const cardNumber = cardNumberInput.value;
        if (!validateCardNumber(cardNumber)) {
            formatNumberError.style.display = "block";
            blankNumberError.style.display = "none";
        } else if (cardNumber.trim() === "") {
            formatNumberError.style.display = "none";
            blankNumberError.style.display = "block";
        } else {
            formatNumberError.style.display = "none";
            blankNumberError.style.display = "none";
            cardMainNumber.textContent = formatCardNumber(cardNumber);
        }
    });

    cardNameInput.addEventListener("input", function () {
        const name = cardNameInput.value;
        if (name.trim() === "") {
            blankNameError.style.display = "block";
        } else {
            blankNameError.style.display = "none";
            cardName.textContent = name;
        }
    });

    const expMonthInput = document.getElementById("exp_month");
    const expYearInput = document.getElementById("exp_year");

    expMonthInput.addEventListener("input", function () {
        const month = expMonthInput.value;
        if (!/^\d{1,2}$/.test(month) || month < 1 || month > 12) {
            formatMonthError.style.display = "block";
            blankMonthError.style.display = "none";
        } else if (month.trim() === "") {
            formatMonthError.style.display = "none";
            blankMonthError.style.display = "block";
        } else {
            formatMonthError.style.display = "none";
            blankMonthError.style.display = "none";
            cardExpirationMonth.textContent = month.padStart(2, "MM");
        }
    });

    expYearInput.addEventListener("input", function () {
        const year = expYearInput.value;
        if (!/^\d{1,2}$/.test(year)) {
            formatYearError.style.display = "block";
            blankYearError.style.display = "none";
        } else if (year.trim() === "") {
            formatYearError.style.display = "none";
            blankYearError.style.display = "block";
        } else {
            formatYearError.style.display = "none";
            blankYearError.style.display = "none";
            cardExpirationYear.textContent = year.padStart(2, "YY");
        }
    });

    const cvcInput = document.getElementById("cvc");

    cvcInput.addEventListener("input", function () {
        const cvc = cvcInput.value;
        if (!/^\d{1,3}$/.test(cvc)) {
            formatCvcError.style.display = "block";
            blankCvcError.style.display = "none";
        } else if (cvc.trim() === "") {
            formatCvcError.style.display = "none";
            blankCvcError.style.display = "block";
        } else {
            formatCvcError.style.display = "none";
            blankCvcError.style.display = "none";
            cardCVC.textContent = cvc;
        }
    });

    function formatCardNumber(cardNumber) {
        return cardNumber.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim();
    }

    function validateCardNumber(cardNumber) {
        return /^\d{16}$/.test(cardNumber.replace(/\s/g, ""));
    }
});


