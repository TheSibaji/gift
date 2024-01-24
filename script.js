const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const updateLine = async (element, message, delay) => {
    for (let i = 0; i < 5; i++) {
        element.textContent = message + ".".repeat(i + 1);
        await sleep(500); // Blinking delay
    }

    element.textContent = message + "..."; // Show dots for the remaining time
    await sleep(delay - 3000); // Pause after printing dots

    element.textContent = message + "... ✔"; // Ensure dots are visible even after pause
    await sleep(1500); // Continue to show dots after the pause
};

async function startHacking() {
    const line1 = document.querySelector("#line1");
    await updateLine(line1, "Initializing Hacking", 4000);

    const line2 = document.querySelector("#line2");
    await updateLine(line2, "Reading your Files", 4000);

    const line3 = document.querySelector("#line3");
    await updateLine(line3, "Detecting Passwords", 4000);

    const line4 = document.querySelector("#line4");
    await updateLine(line4, "Sending all personal files and passwords to server", 4000);

    const line5 = document.querySelector("#line5");
    await updateLine(line5, "Cleaning up", 4000);

    const line6 = document.querySelector("#line6");
    await updateLine(line6, "Good Bye Dear", 4000);
}

startHacking();
