document.addEventListener("DOMContentLoaded", () => {
  const pollForm = document.getElementById("poll-form");

  pollForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const pollQuestion = document.getElementById("poll-question").value;

    if (pollQuestion.trim() === "") {
      alert("Please enter a poll question!");
      return;
    }

    // Simulate poll creation
    alert(`Poll Created: "${pollQuestion}"!`);
    document.getElementById("poll-question").value = ""; // Clear input field
  });
});
