import renderTable from "../renderTable";
import renderPreview from "../renderPreview";
import { changeLanguage } from "../showLanguage";

const addActivClass = (allBtns, currentBtn, activClass) => {
  allBtns.forEach(item => {
    item.classList.remove(activClass);
  });
  document.querySelector(`#sort-${currentBtn}`).classList.add(activClass);
};

const sortByProp = (data, prop, type) => {
  let currentLang = null;
  //получить текущий язык
  (function () {
    const langBtns = document.querySelectorAll("[data-showlang]");
    langBtns.forEach(item => {
      if (item.classList.contains("class-visible")) {
        currentLang = item.getAttribute("data-lang");
      }
    });
  })();

  const sortById = arr => {
    arr.sort((a, b) => {
      return a.id - b.id;
    });
  };

  const sortByAge = arr => {
    arr.sort((a, b) => {
      return a.age - b.age;
    });
  };

  const sortByName = (arr, lang) => {
    arr.sort((first, second) => {
      let firstUser = first.name[lang];
      let secondUser = second.name[lang];
      if (firstUser < secondUser) {
        return -1;
      } else if (firstUser > secondUser) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  switch (prop) {
    case "id":
      sortById(data);
      break;
    case "name":
      sortByName(data, currentLang);
      break;
    case "age":
      sortByAge(data);
      break;
  }
  //Тип фильтрации
  if (type === "toHigher") {
    data.reverse();
  }
  renderTable(data);
  renderPreview(data);
  changeLanguage(currentLang);
};

const sortingHandlers = data => {
  let sortProp = "id";
  let sortType = "toLower";
  const sortPropertyBtns = document.querySelectorAll("[data-sort-value]");
  const sortTypeBtns = document.querySelectorAll("[data-sort-type]");
  const activClass = "is-checked";

  const checkProp = e => {
    const currentProp =
      e.target.getAttribute("data-sort-value") ||
      e.target.parentNode.getAttribute("data-sort-value");
    const currentType =
      e.target.getAttribute("data-sort-type") ||
      e.target.parentNode.getAttribute("data-sort-type");

    //Перезаписали значение. Если нажали
    if (currentProp) {
      sortProp = currentProp;
      addActivClass(sortPropertyBtns, sortProp, activClass);
    }
    if (currentType) {
      sortType = currentType;
      addActivClass(sortTypeBtns, sortType, activClass);
    }
  };

  document.querySelector(".controlPanel__sort").addEventListener("click", e => {
    checkProp(e);
    sortByProp(data, sortProp, sortType);
  });
};
export { sortingHandlers, sortByProp };
