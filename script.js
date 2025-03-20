let totalPercentage = 0;

function updateThermometer(percentage) {
    totalPercentage += percentage;

    let thermometerImage = document.getElementById("thermometer-img");

    if (totalPercentage >= 0 && totalPercentage <= 5) {
        thermometerImage.src = "./images/thermometer_0_5.png";
    } else if (totalPercentage > 5 && totalPercentage <= 10) {
        thermometerImage.src = "./images/thermometer_5_10.png";
    } else if (totalPercentage > 10 && totalPercentage <= 15) {
        thermometerImage.src = "./images/thermometer_10_15.png";
    } else if (totalPercentage > 15 && totalPercentage <= 20) {
        thermometerImage.src = "./images/thermometer_15_20.png";
    } else if (totalPercentage > 20 && totalPercentage <= 25) {
        thermometerImage.src = "./images/thermometer_20_25.png";
    } else if (totalPercentage > 25 && totalPercentage <= 30) {
        thermometerImage.src = "./images/thermometer_25_30.png";
    } else if (totalPercentage > 30) {
        thermometerImage.src = "./images/thermometer_30_plus.png";
    }
}

function showResult() {
    let resultText = document.getElementById("result");
    if (totalPercentage > 30) {
        resultText.innerHTML = `<div class="success">Congratulations! You have successfully created a methane reduction roadmap with a total reduction of ${totalPercentage}%.</div>`;
    } else {
        resultText.innerHTML = `<div class="failure">Sorry, you did not create a successful methane reduction roadmap. You reduced methane by only ${totalPercentage}%.</div>`;
    }
}
