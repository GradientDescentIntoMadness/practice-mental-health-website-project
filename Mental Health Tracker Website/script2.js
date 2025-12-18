
function respondToChoice(choice) {
    const responseElement = document.getElementById("response");

    responseElement.textContent = "...";
    setTimeout(() => {
        if (choice === "good") {
            responseElement.textContent = "That's great to hear! Keep up the positive vibes and have a relaxed mindset!";
        }
        else if (choice === "okay") {
            responseElement.textContent = "It's okay to have tough days. Remember, you're doing your best and that's enough.";
        }
        else if (choice === "bad") {
            responseElement.textContent = "I'm sorry you had a bad day. Take some time for self-care and remember that tomorrow is a new day.";
        }

    }, 2000)
};
function meditation() {
    const text = document.getElementById("meditation-response");

    function run() {
        text.textContent = "Inhale... (4s)";

        setTimeout(() => {
            text.textContent = "Hold... (7s)";
        }, 4000);

        setTimeout(() => {
            text.textContent = "Exhale... (8s)";
        }, 11000);

        setTimeout(run, 19000); // This restarts the cycle
    }
    run();
}