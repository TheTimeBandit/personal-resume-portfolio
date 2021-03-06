const themes = Object.freeze({
  light: {
    bg_A: "#dee5f3",
    bg_B: "#eef3ff",
    text: "#2a2a2a",
  },
  dark: {
    bg_A: "#1b2e44",
    bg_B: "#243b54",
    text: "#f2f2fa",
  },
});

export function setTheme(themeId) {
  const theme = themes[themeId] || themes.dark;

  document.querySelector(":root").style.setProperty("--theme_bg_A", theme.bg_A);
  document.querySelector(":root").style.setProperty("--theme_bg_B", theme.bg_B);
  document.querySelector(":root").style.setProperty("--theme_text", theme.text);
}
