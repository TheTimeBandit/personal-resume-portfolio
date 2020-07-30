function moveBackground(element, value) {
  element.style.backgroundPositionY = `${value}px`;
}

function registerScrolling() {
  const backgroundElement = document.getElementById("LandingPage");

  const bgScrollModifier = 0.5;

  const onScroll = () =>
    moveBackground(backgroundElement, window.scrollY * bgScrollModifier);

  window.addEventListener("scroll", onScroll);
}

// registerScrolling();
