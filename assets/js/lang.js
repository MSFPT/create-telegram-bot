export class Lang {
  constructor() {
    delete this.setLang;
    return this;
  }
  check() {
    window.addEventListener("storage", event => {
      if (event.key === "lang") this.check();
    });
    const type_lang = this.getTypeLang();
    if (type_lang === "fa") this.setFaLnag();
    else this.setEnLnag();
    return type_lang;
  }
  getTypeLang() {
    const lang = window.localStorage.getItem("lang");
    return (!!lang) ? (lang => {
      lang = lang.toLowerCase();
      return (lang === "fa") ? "fa": "en";
    })(lang) : "en";
  }
  setLang(lang) {
    document.querySelector("html").setAttribute("lang", lang);
    window.localStorage.setItem("lang", lang);
  }
  setEnLnag() {
    this.setLang("en");
  }
  setFaLnag() {
    this.setLang("fa");
  }
}