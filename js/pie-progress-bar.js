function initializeDonut() {
  const donuts = document.querySelectorAll(".donut");

  donuts.forEach((donut) => {
    const text = donut.querySelector(".text") || document.createElement("div");
    donut.appendChild(text);
    const progress = donut.getAttribute("data-progress");
    const customText = donut.getAttribute("data-text");
    const color = donut.getAttribute("data-color");
    const bgcolor = donut.getAttribute("data-bgcolor");

    text.textContent = customText;

    const updateDonut = (percent) => {
      donut.style.background = `conic-gradient(
              ${color} 0%,
              ${color} ${percent}%,
              ${bgcolor} ${percent}%,
              ${bgcolor} 100%
          )`;
    };

    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress < progress) {
        currentProgress++;
        updateDonut(currentProgress);
      } else {
        clearInterval(interval);
      }
    }, 10);
  });
}
