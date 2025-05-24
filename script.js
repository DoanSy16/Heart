const container = document.querySelector('.animation-container');

const messages = [
  'Thank u for coming',
  'I love u so much',
  `From the moment i first saw you,
  I knew my heart would no logger listen to reason.`,
  ,
];

function createFloatingElement() {
  const element = document.createElement('div');
  const isHeart = Math.random() > 0.7;

  if (isHeart) {
    element.className = 'heart';
    element.textContent = '❤️';
    element.style.fontSize = `${Math.random() * 20 + 20}px`;
  } else {
    element.className = 'text';
    element.textContent = messages[Math.floor(Math.random() * messages.length)];
    element.style.fontSize = `${Math.random() * 20 + 10}px`;
  }

  element.style.left = `${Math.random() * 100}vw`;
  element.style.animationDuration = `${Math.random() * 3 + 2}s`;
  container.appendChild(element);

  setTimeout(() => container.removeChild(element), 5000);
}

setInterval(createFloatingElement, 300);