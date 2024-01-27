document.addEventListener('DOMContentLoaded', function() {
  const text = "Thoriq Kusuma";
  const speed = 100; // Speed in milliseconds
  const resetDelay = 3000; // Reset every 5 seconds

  function type() {
    let index = 0;
    const typedText = document.getElementById('typed-text');
    typedText.innerHTML = ''; // Clear previous content

    function addNextCharacter() {
      if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(addNextCharacter, speed);
      }
    }

    addNextCharacter();
  }

  setInterval(type, resetDelay); // Call type function every 5 seconds
  type(); // Initial call to start the typing effect
});

function redirectTo(url) {
  if (url == undefined) { alert("Coming Soon!!"); return; }
  window.location.href = url;
}
