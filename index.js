/* All Source Code is written by RetrogisusDEV, you can find updated code in Https://github.com/RetrogisusDEV/MinimalistMaterialWeb.
Source Code under GPL-3 License */

/* svg Material Icon copyright of google under GPL-3 License */

/* Sponsor Initialization */
console.error("MinimalistMaterial By RetrogisusDEV");

/* Theme Changer V2 by RetrogisusDEV */
const defaultTheme = { ThemeVar: 0, ToneVar: 0 };
if (!localStorage.ThemeVar) {
  localStorage.setItem('ThemeVar', defaultTheme.ThemeVar);
  localStorage.setItem('ToneVar', defaultTheme.ToneVar);
  console.log('Default theme set');
}

var ThemeCurrent = parseInt(localStorage.ThemeVar);
var ToneCurrent = parseInt(localStorage.ToneVar);

// Initializing Theme
applyTheme(ThemeCurrent, ToneCurrent);

function applyTheme(theme, tone) {
  const element = document.body;
  const themes = ['LightTheme', 'DarkTheme', 'ReadTheme'];
  element.classList.remove(`mmaterial-ReadTheme`);
  // Remove all theme classes
  themes.forEach((t) => {
    element.classList.remove(`mmaterial-${t}-0`, `mmaterial-${t}-1`, `mmaterial-${t}-2`);
  });

  if (theme < 2) {
    element.classList.add(`mmaterial-${themes[theme]}-${tone}`);
    console.log(`${themes[theme]} Set - Tone: ${tone}`);
  } else {
    element.classList.add("mmaterial-ReadTheme");
    console.log("Read Optimized Theme Set - Tone: " + tone);
  }


  ThemeCurrent = theme;
  ToneCurrent = tone;

  // Update localStorage
  localStorage.setItem('ThemeVar', theme);
  localStorage.setItem('ToneVar', tone);
}

/* Expand menu V1 by RetrogisusDEV */
function toggleMenu(isOpen) {
  const menu = document.getElementById("mm");
  if (isOpen) {
    menu.innerHTML = `
      <div class="mme">
        <div class="mma"><button onclick="toggleMenu(false)">${burgersvg}</button></div>
        <div class="mmaterial-div-content">
          <h4 style="text-align:center;margin-block: 10px; color: var(--titleColor);">Temas</h4>
          <div class="mmaa">
            <button onclick="applyTheme(0, ToneCurrent)">${sunsvg}</button>
            <button onclick="applyTheme(ThemeCurrent, 0)">Azulado</button>
          </div>
          <div class="mmaa">
            <button onclick="applyTheme(1, ToneCurrent)">${moonsvg}</button>
            <button onclick="applyTheme(ThemeCurrent, 1)">Verdozo</button>
          </div>
          <div class="mmaa">
            <button>${viewmodesvg}</button>
            <button onclick="applyTheme(ThemeCurrent, 2)">Rojizo</button>
          </div>
        </div>
      </div>`;
  } else {
    menu.innerHTML = `<div id="mm"><div class="mma"><button onclick="toggleMenu(true)">${burgersvg}</button></div></div>`;
  }
}

toggleMenu(false);

/* bubbleExpand V1 by Retrogisus */
function bubbleExpand(id, content) {
  const element = document.getElementById(id);
  if (!element.innerText) { element.innerHTML = `<p class="mmaterial-bubble-middle">${content}</p>`; } else { element.innerHTML = ``;}
}