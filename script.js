function moveRandomE1(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 1) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 1) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomE1(e.target);
})

document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("move-random");
    const btnContainer = document.querySelector(".btn");

    noButton.addEventListener("mouseenter", function (event) {
        event.preventDefault();

        // Create a new "Yes" button
        const newYesButton = document.createElement("a");
        newYesButton.textContent = "Yes";
        newYesButton.href = "yes.html";
        newYesButton.style.position = "absolute";
        newYesButton.style.left = Math.random() * window.innerWidth + "px";
        newYesButton.style.top = Math.random() * window.innerHeight + "px";
        newYesButton.style.background = "#fff";
        newYesButton.style.padding = "10px 25px";
        newYesButton.style.borderRadius = "15px";
        newYesButton.style.boxShadow = "0.5rem 1rem 3rem hs1(1, 1%, 1%, 0.3)";
        newYesButton.style.textDecoration = "none";
        newYesButton.style.color = "#111";

        document.body.appendChild(newYesButton);
    });
});
