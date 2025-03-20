// Questions and their corresponding percentage reductions
const questions = [
    {
        text: "Will you encourage a 10% reduction in meat eating by 2030?",
        reduction: 5
    },
    {
        text: "Will you support alternative protein development as a cost-reducing ingredient in processed foods?",
        reduction: 5
    },
    {
        text: "Will you help more cows eat methane-reducing feed additives?",
        reduction: 1
    },
    {
        text: "Will you help more farmers acidify their slurry stores?",
        reduction: 1
    },
    {
        text: "Will you help more farmers capture methane from their slurry and sell it to the grid?",
        reduction: 1
    },
    // Add more questions here as needed...
];

let currentQuestionIndex = 0;
let totalReduction = 0;

// Function to load the next question
function loadNextQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = "";

    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        const questionText = document.createElement('p');
        questionText.textContent = question.text;

        const yesButton = document.createElement('button');
        yesButton.textContent = "Yes";
        yesButton.onclick = () => handleAnswer(true);

        const noButton = document.createElement('button');
        noButton.textContent = "No";
        noButton.onclick = () => handleAnswer(false);

        questionContainer.appendChild(questionText);
        questionContainer.appendChild(yesButton);
        questionContainer.appendChild(noButton);
    } else {
        showFinalResult();
    }
}

// Handle user answer and update the thermometer
function handleAnswer(isYes) {
    if (isYes) {
        totalReduction += questions[currentQuestionIndex].reduction;
    }
    currentQuestionIndex++;
    updateThermometer();
    loadNextQuestion();
}

// Update the thermometer image based on total reduction
function updateThermometer() {
    let thermometerImage = "images/thermometer_empty.png";

    if (totalReduction >= 30) {
        thermometerImage = "images/thermometer_full.png";
    } else if (totalReduction >= 25) {
        thermometerImage = "images/thermometer_75.png";
    } else if (totalReduction >= 10) {
        thermometerImage = "images/thermometer_50.png";
    }

    document.getElementById("thermometer").src = thermometerImage;
}

// Show the final result
function showFinalResult() {
    const finalResult = document.getElementById('final-result');
    const finalMessage = document.getElementById('final-message');
    const totalReductionDisplay = document.getElementById('total-reduction');
    
    finalResult.classList.remove('hidden');
    totalReductionDisplay.textContent = totalReduction;
    
    if (totalReduction >= 30) {
        finalMessage.textContent = "Congratulations! You've successfully created a National Methane Roadmap.";
    } else {
        finalMessage.textContent = "Sorry, you did not create a National Methane Roadmap. But you’re on the right track!";
    }
}

// Start the quiz by loading the first question
loadNextQuestion();