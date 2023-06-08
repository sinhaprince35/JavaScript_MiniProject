const minInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("startBtn");
const resetButton = document.getElementById("resetBtn");
const timerDisplay = document.getElementById("timer");

let countDown; // Variables to store the countdown interval.

// Function to start the timer
function startTimer() {
  const minutes = parseInt(minInput.value, 10);
  const seconds = parseInt(secondsInput.value, 10);

  // Calculate the total time in seconds
  let totalTime = minutes * 60 + seconds;

  // Display initial time
  displayTime(totalTime);

  // Disable input fields and start button
  minInput.disabled = true;
  secondsInput.disabled = true;
  startButton.disabled = true;

  // Start the countdown
  countDown = setInterval(() => {
    totalTime--;

    // Display updated time
    displayTime(totalTime);

    // Check if the timer has reached 0
    if (totalTime <= 0) {
      clearInterval(countDown); // Stop the countdown
      alert("Time is up!");
      resetTimer(); // Reset the timer
    }
  }, 1000); // Run the countdown every second
}

// Function to stop the timer
function stopTimer() {
  clearInterval(countDown); // Stop the countdown
  resetTimer(); // Reset the timer
}

// Function to display the time
function displayTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Format the time with leading zeros
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  timerDisplay.textContent = formattedTime;
}

// Function to reset the timer
function resetTimer() {
  // Enable input fields and start button
  minInput.disabled = false;
  secondsInput.disabled = false;
  startBtn.disabled = false;

  // Reset input fields and timer display
  minInput.value = 0;
  secondsInput.value = 0;
  timerDisplay.textContent = "00:00";
}

// Event listeners for the buttons
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", stopTimer);
