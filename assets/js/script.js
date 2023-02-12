import { Theme } from "https://msfpt.github.io/assets/js/theme.js";
import { Lang } from "./lang.js";

const exist = (data, _data) => { return data.indexOf(_data) !== -1; }

const main = mainEvent => {

  document.body.classList.remove("loading");

  const theme = new Theme();
  const type_theme = theme.check();

  const lang = new Lang();
  const type_lang = lang.check();

  const works = app => {

    try {
      document.querySelector("#system_theme_btn").addEventListener("click", e => theme.setSystemTheme());
      document.querySelector("#dark_theme_btn").addEventListener("click", e => theme.setDarkTheme());
      document.querySelector("#light_theme_btn").addEventListener("click", e => theme.setLightTheme());
    } catch (error) { }

    try {

      const change_theme_icon = {
        sun: document.querySelector("#sun_theme_icon"),
        moon: document.querySelector("#moon_theme_icon")
      };

      const theme_change_btns = document.querySelectorAll(`#change_theme input[type="radio"][name="theme"]`);
      if (type_theme == "dark") theme_change_btns[0].checked = true;
      else if (type_theme == "light") theme_change_btns[1].checked = true;
      else theme_change_btns[2].checked = true;

      const select_theme = document.querySelector("#change_theme");

      select_theme.querySelector('label[for="theme_dark_btn"]').addEventListener("click", e => theme.setDarkTheme());
      select_theme.querySelector('label[for="theme_light_btn"]').addEventListener("click", e => theme.setLightTheme());
      select_theme.querySelector('label[for="theme_system_btn"]').addEventListener("click", e => theme.setSystemTheme());

      const change_theme_event = event => {
        const theme_icon = document.querySelector("#theme-icon");
        theme_icon.classList.add("active");
        const _close_box_event = e => theme_icon.classList.remove("active");
        window.onblur = _close_box_event;
        document.querySelector("#change_theme_bc").addEventListener("click", _close_box_event);
        theme_change_btns.forEach(el => setTimeout(() => el.addEventListener("click", _close_box_event), 500));
      }

      change_theme_icon.sun.addEventListener("click", change_theme_event);
      change_theme_icon.moon.addEventListener("click", change_theme_event);
    
    } catch (error) { }

    try {

      const change_lang_icon = {
        en: document.querySelector("#en_lang_icon"),
        fa: document.querySelector("#fa_lang_icon")
      };

      const lang_change_btns = document.querySelectorAll(`#change_lang input[type="radio"][name="lang"]`);
      lang_change_btns[(type_lang == "en") ? 0 : 1].checked = true;

      const select_lang = document.querySelector("#change_lang");

      select_lang.querySelector('label[for="lang_en_btn"]').addEventListener("click", e => lang.setEnLnag());
      select_lang.querySelector('label[for="lang_fa_btn"]').addEventListener("click", e => lang.setFaLnag());

      const change_theme_event = event => {
        const lang_icon = document.querySelector("#lang-icon");
        lang_icon.classList.add("active");
        const _close_box_event = e => lang_icon.classList.remove("active");
        window.onblur = _close_box_event;
        document.querySelector("#change_lang_bc").addEventListener("click", _close_box_event);
        lang_change_btns.forEach(el => setTimeout(() => el.addEventListener("click", _close_box_event), 500));
      }

      change_lang_icon.en.addEventListener("click", change_theme_event);
      change_lang_icon.fa.addEventListener("click", change_theme_event);

    } catch (error) { }

  }

  works(document.body);

}

document.addEventListener("DOMContentLoaded", main);