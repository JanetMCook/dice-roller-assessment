let userInput = document.querySelector("#name");
let rollDiceButton = document.querySelector(".roll");
let totalSumDiv = document.querySelector("#total");
let allRollsButton = document.querySelector(".allRolls");
let listRolls = document.querySelector("#listAllRolls");
let dieRolls = []
let totalSum = 0

rollDiceButton.addEventListener("click", function () {
    console.log("+ button clicked");
    let userInputValue = Number(userInput.value)

    let loopCounter = 0;
    while (userInputValue > loopCounter) {
        let singleRoll = Math.floor(Math.random() * 6) + 1;
        console.log(singleRoll)
        loopCounter += 1
        totalSum += singleRoll
        dieRolls.push(singleRoll)
      
        
    }
    totalSumDiv.innerHTML = "Sum Total " + totalSum 
    console.log(dieRolls)
})

allRollsButton.addEventListener("click", function () {
    console.log("yes maam");
    let loopCounter = 0;
    while (loopCounter < dieRolls.length) {
        listRolls.innerHTML += "<li>" + dieRolls[loopCounter] + "</li>"
        loopCounter += 1
    }

    // let listRollsValues = Number(dieRolls.values)
})

// resetButton let userInput.Value = emptyString

