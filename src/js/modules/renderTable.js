import transliterationRU from "./trasnsliteration";
const renderTable = data => {
  const userList = document.querySelector("#table .users");
  userList.innerHTML = "";
  data.map(({ id, age, image, name, phone }) => {
    const userListItem = document.createElement("div");
    userListItem.classList.add("users__item");
    userListItem.setAttribute("data-sort-id", id);
    userListItem.innerHTML = `
      <div class="users__avatar">
        <img src="../../assets/images/${image}.svg" alt="${image}" />
      </div>
      <div class="users__name name" data-sort-item="name">
        <span data-lang="en">${name.en}</span>
        <span data-lang="ru">${name.ru}</span>
      </div>
      <div class="users__age data-sort-item="age">${age}</div>
      <div class="users__tel">${phone}</div>
      <div class="users__important-star">&#9734;</div>
      `;
    userList.append(userListItem);
  });
};

export default renderTable;
