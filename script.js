let currentQuestion = 0;
const questions = document.querySelectorAll('.question'); // Select all questions
const thermometerImage = document.getElementById("thermometer"); // Select the thermometer image
let totalReduction = 0; // Initialize total reduction percentage

// Show only the current question
function showQuestion(index) {
  questions.forEach((question, i) => {
    question.style.display = i === index ? 'block' : 'none';
  });
}

// Update the thermometer image based on the reduction percentage
function updateThermometerImage(percentage) {
  let imageSource;
  if (percentage >= 75) {
    imageSource = "images/thermometer_full.png"; // Fully filled
  } else if (percentage >= 50) {
    imageSource = "images/thermometer_75.png"; // 75% filled
  } else if (percentage >= 25) {
    imageSource = "images/thermometer_50.png"; // 50% filled
  } else if (percentage > 0) {
    imageSource = "images/thermometer_25.png"; // 25% filled
  } else {
    imageSource = "images/thermometer_empty.png"; // Empty
  }

  // Change the image source
  thermometerImage.src = imageSource;
}

// Handle the answer (yes or no) and calculate the percentage
function handleAnswer(isYes, reduction) {
  if (isYes) {
    totalReduction += reduction; // Add percentage if "yes"
  }

  // Update thermometer image after answering
  updateThermometerImage(totalReduction);
  
  // Move to the next question
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
}

// Show the result based on the total reduction
function showResult() {
  const resultContainer = document.getElementById("result");
  const message = totalReduction >= 30 ? 
    `Congratulations! You've created a national methane roadmap with a reduction of ${totalReduction}%!` : 
    `Sorry, you did not create a methane roadmap. Your reduction was only ${totalReduction}%.`;

  resultContainer.innerHTML = message;
  resultContainer.style.display = 'block'; // Show result container
}

showQuestion(currentQuestion); // Show the first question initially
