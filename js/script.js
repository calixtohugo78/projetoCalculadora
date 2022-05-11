let calcBody = document.querySelector(".calcBody");
let calcScreen = document.querySelector(".calcScreen")

calcBody.addEventListener('click', (e) => {

    if (e.target.id) {

        let btn = e.target.innerText;

        switch (btn) {

            case 'AC':
                calcScreen.innerText = "";
                break

            case 'C':
                calcScreen.innerText = calcScreen.innerText.substring(0, calcScreen.innerText.length - 1);
                break

            case '=':
                printResult(calcScreen.innerText);
                break

            default:
                calcScreen.innerText += e.target.innerText

        }

    }

})

const printResult = (stringResult) => {

    calcScreen.innerText = eval(stringResult);

}

