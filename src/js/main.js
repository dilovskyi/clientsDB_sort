import getData from "./services/getData";

import renderTable from "./modules/renderTable";
import renderPreview from "./modules/renderPreview";
import { showLanguageHandler } from "./modules/showLanguage";

import viewHandlers from "./modules/controlPanel/viewSection";
import { sortingHandlers } from "./modules/controlPanel/sortSection";
import filterInput from "./modules/controlPanel/filterInput";

document.addEventListener("DOMContentLoaded", () => {
  getData("../../assets/data.json")
    .then(data => {
      renderTable(data);
      renderPreview(data);
      return data;
    })
    .then(data => {
      viewHandlers();
      return data;
    })
    .then(data => {
      filterInput(data);
      sortingHandlers(data);
      showLanguageHandler(data);
    });
});
