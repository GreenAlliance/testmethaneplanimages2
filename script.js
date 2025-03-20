let currentQuestionIndex = 0;
let totalReduction = 0;

const questions = [
    { question: "Will you encourage a 10% reduction in meat eating by 2030?", yesPercentage: 5 },
    { question: "Will you support alternative protein development to be a cost-reducing ingredient in processed foods?", yesPercentage: 5 },
    { question: "Will you help more cows eat methane-reducing feed additives?", yesPercentage: 1 },
    { question: "Will you help more farmers acidify their slurry stores?", yesPercentage: 1 },
    { question: "Will you help more farmers capture methane from their slurry and sell it to the grid?", yesPercentage: 1 },
    { question: "Will you back new technology to encourage selective breeding in cows?", yesPercentage: 0 },
    { question: "Will you back new technology to develop methane-reducing vaccines for cows?", yesPercentage: 0 },
    { question: "Will you mandate regular leak detection and repair for oil and gas operators?", yesPercentage: 1 },
    { question: "Will you bring forward the ban on routine venting and flaring?", yesPercentage: 1 },
    { question: "Will you regulate to make oil & gas operators upgrade their facilities?", yesPercentage: 1 },
    { question: "Would you regulate to make oil & gas operators replace their leaky gas mains supply?", yesPercentage: 4 },
    { question: "Will you keep up best practice by continuing the landfill tax?", yesPercentage: 8 },
    { question: "Will you ban organic waste in landfills from 2028?", yesPercentage: 0 },
    { question: "Will you make sure support for capturing landfill gas does not fall away?", yesPercentage: 3 },
    { question: "Will you increase the capture rate of landfill methane to 80% by 2030?", yesPercentage: 0 }
];

// Function to update the content of the question page
function updateQuestionPage() {
    const questionElement = document.getElementById('question');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const thermometerImage = document.getElementById('thermometer-img');

    // Display the current question
    questionElement.textContent = questions[currentQuestionIndex].question;

    // Update the thermometer image based on the progress
    thermometerImage.src = `./images/thermometer-${Math.max(0, 100 - totalReduction)}.png`;

    // Enable the buttons again
    yesButton.disabled = false;
    noButton.disabled = false;
}

// Function to handle the 'Yes' button click
function handleYesClick() {
    totalReduction += questions[currentQuestionIndex].yesPercentage;
    nextQuestion();
}

// Function to handle the 'No' button click
function handleNoClick() {
    nextQuestion();
}

// Function to proceed to the next question or show the result page
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Continue to the next question
        updateQuestionPage();
    } else {
        // Show the result page
        showResult();
    }
}

// Function to display the final result based on the total reduction
function showResult() {
    const resultPage = document.getElementById('result-page');
    const resultMessage = document.getElementById('result-message');
    const resultPercentage = document.getElementById('result-percentage');
    const thermometerImageResult = document.getElementById('thermometer-img-result');

    resultPage.style.display = 'block'; // Show the result page

    resultPercentage.textContent = `${totalReduction}%`; // Display the final percentage

    if (totalReduction >= 30) {
        resultMessage.textContent = "Congratulations! You’ve created a successful methane reduction roadmap.";
    } else {
        resultMessage.textContent = "Unfortunately, you did not meet the global methane pledge.";
    }

    // Update the thermometer image based on the final result
    thermometerImageResult.src = `./images/thermometer-${Math.max(0, 100 - totalReduction)}.png`;
}

// Initialize the first question
updateQuestionPage();

// Add event listeners for the Yes and No buttons
document.getElementById('yes-button').addEventListener('click', handleYesClick);
document.getElementById('no-button').addEventListener('click', handleNoClick);
