let calcBody = document.querySelector(".calcBody");
let calcScreen = document.querySelector(".calcScreen")

calcBody.addEventListener('click', (e) => {

    if (e.target.id) {

        let btn = e.target.innerText;

        switch (btn) {

            case 'AC':
                calcScreen.innerText = "";
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

    let issetDiv = stringResult.indexOf("/");
    let issetMult = stringResult.indexOf("x");
    let issetSub = stringResult.indexOf("-");
    let issetAdd = stringResult.indexOf("+");

    if (issetDiv != -1) {
        let splitResult = stringResult.split("*");

        console.log(splitResult)
    }

}

