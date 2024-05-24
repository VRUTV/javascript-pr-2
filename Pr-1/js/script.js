
    let units = 500;
    
    let billAmount = 0;

    let bill = document.getElementById("Electricity")

    if (units <= 50) {
        billAmount = units * 1;
    } else if (units <= 150) {
        billAmount = (50 * 1) + ((units - 50) * 2);
    } else if (units <= 250) {
        billAmount = (50 * 1) + (100 * 2) + ((units - 150) * 3);
    } else {
        billAmount = (50 * 1) + (100 * 2) + (100 * 3) + ((units - 250) * 4);
    }


    if (units > 150) {
        billAmount += billAmount * 0.20;
    }

    console.log("The total bill amount is := ", billAmount);

    Electricity.innerHTML =  "The total bill amount is := " + billAmount;


