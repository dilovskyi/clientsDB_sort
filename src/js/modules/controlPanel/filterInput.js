const filterInput = data => {
  const sortingInput = document.querySelector("#sort-input");
  const label = document.querySelectorAll(".filterInput__label");
  const activClass = "is-checked";
  let currentLang = null;

  const changeLabel = (phrase, lang, color) => {
    label.forEach(item => {
      if (item.getAttribute("data-lang") === lang) {
        item.textContent = `${phrase}`;
        item.style.color = color;
      }
    });
  };

  const sortByInput = (arr, lang, target) => {
    const value = target.value.toLowerCase();

    // переписать лучше
    if (lang === "ru") {
      target.value = value.replace(/[A-z+]|(\d)/g, "");
      changeLabel("Имя", lang, "black");

      if (/[A-z+]|(\d)/.test(value)) {
        changeLabel("Измените язык ввода", lang, "red");
      }
    } else if (lang === "en") {
      target.value = value.replace(/[А-я+]|(\d)/g, "");
      changeLabel("Name", lang, "black");

      if (/[А-я+]|(\d)/.test(value)) {
        changeLabel("Change language", lang, "red");
      }
    }

    // ищем фамилию-имя или имя-фамилию
    arr.map((item, i) => {
      const UserName = item.name[lang];
      const UserNameReverse = item.name[lang].split(" ").reverse().join(" ");

      const regexp = new RegExp(`${value}`, "ig");
      const currentUser = document.querySelectorAll(`[data-sort-id="${i}"]`);

      if (regexp.test(UserName) || regexp.test(UserNameReverse)) {
        currentUser.forEach(item => (item.style.display = "grid"));
      } else {
        currentUser.forEach(item => (item.style.display = "none"));
      }
    });
  };

  sortingInput.addEventListener("input", e => {
    //определяем язык страницы
    (function () {
      const langBtns = document.querySelectorAll("[data-showlang]");
      langBtns.forEach(item => {
        if (item.classList.contains("class-visible")) {
          currentLang = item.getAttribute("data-lang");
        }
      });
    })();
    sortByInput(data, currentLang, e.target);
  });

  sortingInput.addEventListener("blur", e => {
    sortingInput.value = "";
    e.target.classList.remove(activClass);
    sortByInput(data, currentLang, e.target);
  });
};

export default filterInput;
