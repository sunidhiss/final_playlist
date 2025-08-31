// script.js
const quotes = [
  "Music is the shorthand of emotion 🎵",
  "One good thing about music, when it hits you, you feel no pain ✨",
  "Without music, life would be a mistake 💭",
  "Turn up the volume and live a little louder 🔊",
  "Where words fail, music speaks 💖"
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

// Run immediately when page loads
window.onload = showQuote;
