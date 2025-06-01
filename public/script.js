document.addEventListener("keydown", function (event) {
    const key = event.key;
    const keyCode = event.keyCode;

    if (
        (keyCode >= 112 && keyCode <= 123) ||           // F1-F12
        (key === "Tab" || keyCode === 9) ||             // Tab
        (event.ctrlKey && key.toUpperCase() === 'U') || // Ctrl+U
        (event.ctrlKey && (key === '+' || key === '-' || keyCode === 187 || keyCode === 189)) || // Ctrl + + / -
        (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(key.toUpperCase())) // DevTools keys
    ) {
        event.preventDefault();
        showPopup();
    }
});

document.addEventListener("wheel", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
        showPopup();
    }
}, { passive: false });

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    showPopup();
});

const swipeText = document.querySelector('.firstpage p');
const messageDiv = document.querySelector('.end');

function checkVisibility() {
    const messageTop = messageDiv.offsetTop;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Check if the top of the message div is within the viewport
    if (messageTop < scrollTop + windowHeight) {
        swipeText.classList.add('hidden');
    } else {
        swipeText.classList.remove('hidden');
    }
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Call on load to set initial state


window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.classList.add("fade-out");

        // Optional: remove the loader from DOM after fade out
        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }, 5000); // 5000ms = 5 seconds
});