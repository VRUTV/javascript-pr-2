
    let principal = 30000;
    let years = 12;
    let rate;

    if (years > 3 && years <= 5) {
        rate = 3;
    } else if (years > 5 && years <= 8) {
        rate = 5;
    } else if (years > 8 && years <= 12) {
        rate = 12;
    } else {
        rate = 15;
    }

    let interest = (principal * rate * years) / 100;

    console.log("Your interest amount is : =", interest);

