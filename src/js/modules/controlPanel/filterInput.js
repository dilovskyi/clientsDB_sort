const filterInput = data => {
  const sortingInput = document.querySelector("#sort-input");
  const activClass = "is-checked";
  let currentLang = null;

  const sortByInput = (arr, lang, target) => {
    const value = target.value.toLowerCase();
    if (currentLang === "ru") {
      target.value = target.value.replace(/[A-z+]|(\d)/g, "");
    } else if (currentLang === "en") {
      target.value = target.value.replace(/[А-я+]|(\d)/g, "");
    }

    // ищем фамилию-имя или имя-фамилию
    arr.map((item, i) => {
      const UserName = item.name[lang];
      const UserNameReverse = item.name[lang].split(" ").reverse().join(" ");

      const regexp = new RegExp(`${value}`, "ig");
      const currentUser = document.querySelectorAll(`[data-sort-id="${i}"]`);

      if (regexp.test(UserName) || regexp.test(UserNameReverse)) {
        currentUser.forEach(item => (item.style.display = "block"));
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
    console.log(e.target.value);

    sortByInput(data, currentLang, e.target);
  });

  sortingInput.addEventListener("blur", e => {
    sortingInput.value = "";
    e.target.classList.remove(activClass);
    sortByInput(data, currentLang, e.target);
  });
};

export default filterInput;
