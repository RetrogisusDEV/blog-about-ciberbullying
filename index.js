/* All Source Code is Whitter by RetrogisusDEV, you can find updated code in Https://github.com/RetrogisusDEV/MinimalistMaterialWeb.

Source Code under GPL-3 License :

*/

/* svg Material Icon copyright of google under GPL-3 License */

/* Sponsor Initialization */

console.error("MinimalistMaterial By RetrogisusDEV");

/* Theme Changer V2 by RetrogisusDEV
Change the colors of webpage using bottons or initializer. */

var ThemeCurrent = localStorage.getItem('ThemeVar');
var ToneCurrent = localStorage.getItem('ToneVar');

if (!ThemeCurrent) {
  ThemeCurrent = 0;
  ToneCurrent = 0;
  localStorage.setItem('ThemeVar', 0);
  localStorage.setItem('ToneVar', 0);
}

// Initializing Theme

ThemeMode(ThemeCurrent, ToneCurrent);


function ThemeMode(theme, tone) {

  ToneCurrent = tone;

  let element = document.body;

  switch (theme) {

    case 0:

      ThemeCurrent = 0;

      element.classList.add("mmaterial-LightTheme-" + tone);

      for (let i = 0; i < 3; i++) {
        if (i != tone) element.classList.remove("mmaterial-LightTheme-" + i);
        element.classList.remove("mmaterial-DarkTheme-" + i);
      }

      element.classList.remove("mmaterial-ReadTheme");

      console.log("Light Theme Set - Tone : " + tone);

      break;

    case 1:

      ThemeCurrent = 1;

      element.classList.add("mmaterial-DarkTheme-" + tone);

      for (let i = 0; i < 3; i++) {
        if (i != tone) element.classList.remove("mmaterial-DarkTheme-" + i);
        element.classList.remove("mmaterial-LightTheme-" + i);
      }

      element.classList.remove("mmaterial-ReadTheme");

      console.log("Dark Theme Set - Tone : " + tone);
      break;

    case 2:

      ThemeCurrent = 2;

      element.classList.add("mmaterial-ReadTheme");

      for (let i = 0; i < 3; i++) {
        element.classList.remove("mmaterial-LightTheme-" + i);
        element.classList.remove("mmaterial-DarkTheme-" + i);
      }
      console.log("Read Optimized Theme Set - Tone : " + tone);
      break;
  }

localStorage.setItem('ThemeVar', ThemeCurrent);
localStorage.setItem('ToneVar', ToneCurrent);
  
}

/* Expand menu V1 by RetrogisusDEV
Expand or hide bottons.*/

function MenuSlider(Ch) {

  let ms = document.getElementById("mm");

  if (Ch == 1) {

    ms.innerHTML = `<div id="mm" class="mme"><div class="mma"><button onclick="MenuSlider(0)">${burgersvg}</button></div><div class="mmaterial-div-content"><h4 style="text-align:center;margin-block: 10px; color: var(--titleColor);">Temas</h4><div class="mmaa"><button onclick="ThemeMode(0,ToneCurrent)">${sunsvg}</button><button onclick="ThemeMode(ThemeCurrent,0)">Azulado</button></div><div class="mmaa"><button onclick="ThemeMode(1,ToneCurrent)">${moonsvg}</button><button onclick="ThemeMode(ThemeCurrent,1)">Verdozo</button></div><div class="mmaa"><button onclick="ThemeMode(2,ToneCurrent)">${viewmodesvg}</button><button onclick="ThemeMode(ThemeCurrent,2)">Rojizo</button></div></div></div></div>`;

    Ch = 0;

  } else {

    ms.innerHTML = `<div id="mm"><div class="mma"><button onclick="MenuSlider(1)">${burgersvg}</button></div></div>`;

    Ch = 1;

  }

}

MenuSlider(0);

/* bubbleExpand V1 by Retrogisus
Expand the bubble for view more content or hide the bubble content. */

function bubbleExpand(id, content) {

  let element = document.getElementById(id);

  if (!element.innerText) {

    element.innerHTML = `<p class="mmaterial-bubble-middle">${content}</p>`;

  } else {

    element.innerHTML = ``;

  }

}
