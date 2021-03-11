import getData from "./services/getData";

import renderTable from "./modules/renderTable";
import renderPreview from "./modules/renderPreview";
import { showLanguageHandler } from "./modules/showLanguage";

import viewHandlers from "./modules/controlPanel/viewSection";
import { sortingHandlers } from "./modules/controlPanel/sortSection";
import filterInput from "./modules/controlPanel/filterInput";
import preloader from "./modules/preloader";

document.addEventListener("DOMContentLoaded", () => {
  getData("../assets/data.json")
    .then(data => {
      renderTable(data);
      renderPreview(data);
      preloader();
      return data;
    })
    .then(data => {
      viewHandlers();
      filterInput(data);
      sortingHandlers(data);
      showLanguageHandler(data);
      return data;
    });
});
