const text = `Wishing you a day filled with love,
laughter and all the things which makes you happy,
let this year be more energetic and joyful than last year💫 and do the things which makes you happy ☺️,
get blessed with your Parents and God, and enjoy your day with your friends and family 🎊
once again Wishing you a 
Happiest Birthday Madam jiii 💖🫀`;

let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 30);
  }
}
typeEffect();