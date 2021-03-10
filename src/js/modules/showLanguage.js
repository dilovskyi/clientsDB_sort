import { sortByProp } from "./controlPanel/sortSection";
const _toggleClass = (selector, add, remove) => {
  const elems = document.querySelectorAll(selector);
  elems.forEach(item => {
    item.classList.add(add);
    item.classList.remove(remove);
  });
};

const _setDefaultSorting = btnsSelector => {
  const btns = document.querySelectorAll(btnsSelector);
  btns.forEach(item => {
    item.classList.remove("is-checked");

    if (item.matches(".default-sorting")) {
      item.classList.add("is-checked");
    }
  });
};
const changeLanguage = (lang = "ru") => {
  if (lang == "ru") {
    _toggleClass(`[data-lang="ru"]`, "class-visible", "class-hidden");
    _toggleClass(`[data-lang="en"]`, "class-hidden", "class-visible");
  } else if (lang == "en") {
    _toggleClass(`[data-lang="en"]`, "class-visible", "class-hidden");
    _toggleClass(`[data-lang="ru"]`, "class-hidden", "class-visible");
  }
};

const showLanguageHandler = data => {
  let showLang = null;
  changeLanguage();
  const btnLang = document.querySelector(".showLang__btn");
  btnLang.addEventListener("click", e => {
    showLang = e.target.getAttribute("data-showlang");
    changeLanguage(showLang);
    _setDefaultSorting("[data-sort-value]");
    _setDefaultSorting("[data-sort-type]");
    sortByProp(data, "id", "toLower");
  });
};

export { showLanguageHandler, changeLanguage };
