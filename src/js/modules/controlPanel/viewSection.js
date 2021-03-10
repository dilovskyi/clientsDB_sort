const viewHandlers = () => {
  const _toggleClass = (selector, add, remove) => {
    const elems = document.querySelectorAll(selector);
    elems.forEach(item => {
      item.classList.add(add);
      item.classList.remove(remove);
    });
  };

  const btnsContainer = document.querySelector(".controlPanel__buttons_view");
  const viewBtns = btnsContainer.querySelectorAll(`[data-view]`);
  const activClass = "is-checked";

  btnsContainer.addEventListener("click", e => {
    viewBtns.forEach(elem => {
      if (e.target === elem || e.target.parentNode === elem) {
        viewBtns.forEach(item => item.classList.remove(activClass));
        elem.classList.add(activClass);
        if (elem.getAttribute("data-view") === "table") {
          _toggleClass("#table", "class-visible", "class-hidden");
          _toggleClass("#preview", "class-hidden", "class-visible");
        } else if (elem.getAttribute("data-view") === "preview") {
          _toggleClass("#table", "class-hidden", "class-visible");
          _toggleClass("#preview", "class-visible", "class-hidden");
        }
      }
    });
  });
};

export default viewHandlers;
