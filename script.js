const modal = document.querySelector("dialog");

document.addEventListener("DOMContentLoaded", function () {
  const text = "Thoriq Kusuma";
  const resetDelay = 3000; // Reset every 5 seconds
  const typedText = document.getElementById("typed-text");
  let animationFrameId;
  let lastTime;

  function addNextCharacter(time) {
    if (!lastTime) {
      lastTime = time;
    }

    if (time - lastTime > 100) {
      // Menambahkan karakter setiap 100 milidetik
      if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
      }
      lastTime = time;
    }

    if (index < text.length) {
      animationFrameId = requestAnimationFrame(addNextCharacter);
    }
  }

  function startTyping() {
    index = 0;
    typedText.innerHTML = "";
    lastTime = null;
    addNextCharacter(performance.now());
  }

  function type() {
    startTyping();
    setTimeout(type, resetDelay);
  }

  type(); // Initial call to start the typing effect

  // Pause animation when tab is inactive
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      startTyping();
    }
  });
});

function redirectTo(url) {
  if (url == undefined) {
    modal.showModal();
    return;
  }
  window.location.href = url;
}
