function showSection(sectionId){
  var sections = document.querySelectorAll(".section");
  sections.forEach(function(section){
    section.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
}

function openLetter(){
  var envelope = document.getElementById("envelope");
  envelope.classList.toggle("open");

  if(envelope.classList.contains("open")){
    typeLetter();
  } else {
    document.getElementById("letter-text").innerHTML = "";
  }
}

function openLetter() {
    const envelope = document.getElementById("envelope");
    envelope.classList.toggle("open");

    const letterText = document.getElementById("letter-text");
    const music = document.getElementById("bg-music");

    if (envelope.classList.contains("open")) {
        const text = `Hi my love ❤️

Happy Birthday! 🎉

This is the only thing I got for you, na advance study ako because of this,
I hope you like it loviee, its not that fancy but sa mga susunod mong bday
mas magaling nako sa mga gantong bagay makakaasa kang mas maganda na. Love 
sobrang thankful ako sa kung anong meron tayo ngayon, I don't want this to end,
but let's keep improving ourselves to be a better person for each other.
having you is one of my biggest win in life. Sabay nating tuparin mga pangarap
natin loviee with the guidance ng nasa taas, pero isa kana sa mga pangarap na natupad ko, I loveee youuuu asawa ko Happy Birthday!!❤️

yours truly:
love love mong pogi`;

        letterText.innerHTML = "";
        let i = 0;

        if (window.typingInterval) clearInterval(window.typingInterval);

        window.typingInterval = setInterval(() => {
            letterText.innerHTML += text[i] === "\n" ? "<br>" : text[i];
            i++;
            if (i >= text.length) {
                clearInterval(window.typingInterval);
            }
        }, 75); 
         music.play().catch(() => {
            console.log("Autoplay blocked. Click anywhere to start music.");
        });
    } else {
        letterText.innerHTML = "";
        if (window.typingInterval) clearInterval(window.typingInterval);
    }
}

const heartImages = [
  "esme (1).jpg",
  "esme (2).jpg",
  "esme (3).jpg",
  "esme (4).jpg",
  "esme (5).jpg"
];

function createHeart() {
    const container = document.getElementById("floating-hearts");
    const heart = document.createElement("div");
    heart.classList.add("heart-photo");

    const img = document.createElement("img");
    img.src = heartImages[Math.floor(Math.random() * heartImages.length)];
    heart.appendChild(img);


    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.bottom = -50 + "px";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 1000);