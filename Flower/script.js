const heartsContainer = document.querySelector('.hearts');

const heartIcons = ['💗', '💖', '💕', '💓'];

function spawnHeart() {
  if (!heartsContainer) return;

  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.setProperty('--duration', `${4 + Math.random() * 3.5}s`);
  heart.style.setProperty('--drift', `${-40 + Math.random() * 80}px`);

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(spawnHeart, 320);
for (let i = 0; i < 12; i += 1) {
  setTimeout(spawnHeart, i * 180);
}