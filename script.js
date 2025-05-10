function login() {
    alert("Redirecting to Google Login...");
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}

document.getElementById("create-poll-btn").addEventListener("click", () => {
    const pollText = document.getElementById("poll-text").value;
    if (pollText) {
        document.getElementById("poll-preview").innerHTML = `<p>Poll Created: "${pollText}"</p>`;
    } else {
        alert("Please enter a poll question.");
    }
});