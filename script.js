function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; 
    heart.style.left = Math.random() * 100 + "vw"; 
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 
    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}
setInterval(createHeart, 300); 
let audio = new Audio ("George_Michael_-_Careless_Whisper_b128f0d300 (mp3cut.net) — копия.mp3");
let audioStopped = false;
  document.addEventListener("click", function () {
    if (!audioStopped && audio.paused) {
      audio.play();
      audio.loop = true;
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const imga = document.getElementById("clickableImage");
    const img = document.getElementById("serdce");
    let clickCount = 0;
    let scale = 1; 
    imga.addEventListener("click", function () {
        clickCount++;
        if (clickCount < 4) {
            scale += 0.2; 
            imga.style.transform = `scale(${scale})`;
        } else {
            if (!audioStopped){
                audio.pause();
                audio.currentTime = 0;
                audioStopped = true;
                }
        let video = document.getElementById("vidosik");
        video.style.visibility = "visible";
        let cong = document.getElementById("cong");
        cong.style.visibility = "visible";
        serdce.style.visibility = "visible";
        video.controls = false;
        video.muted = false;
        imga.style.visibility = "hidden";
        let scale = 1;
        const targetScale = 4;
        const step = 0.02;
    function animate() {
        if (scale < targetScale) {
            scale += step;
            img.style.transform = `scale(${scale})`;
            requestAnimationFrame(animate);
        }
    }
    animate();
        }
    });
})