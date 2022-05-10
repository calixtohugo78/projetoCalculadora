let calcBody = document.querySelector(".calcBody");
let calcScreen = document.querySelector(".calcScreen")

calcBody.addEventListener('click', (e) => {

    if(e.target.id) {

        if(e.target.innerText == "AC"){
            calcScreen.innerText = "0"
        } else {
            calcScreen.innerText += e.target.innerText    
        }

    }

})