import transliterationRU from "./trasnsliteration";
const renderPreview = data => {
  const userList = document.querySelector("#preview .users");
  userList.innerHTML = "";
  data.map(({ id, age, image, name, phone, phrase, video }) => {
    // if (/[A-Za-z]/.test(name.ru)) {
    //   name.ru = transliterationRU(name.ru);
    //   console.log(name.ru);
    // }

    const userListItem = document.createElement("div");
    const previewPlayer = document.createElement("div");
    userListItem.classList.add("users__item");
    userListItem.setAttribute("data-sort-id", id);
    userListItem.innerHTML = `
       <div class="users__info">
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
          <div class="users__descr">
          <span data-lang="en">${phrase.en}</span>
          <span data-lang="ru">${phrase.ru}</span>
          <div>
        </div>`;

    if (video) {
      userListItem.classList.add("users_fullsize");
      previewPlayer.classList.add("users__video");
      previewPlayer.innerHTML = `
        <video width="100%" height="auto" controls autoplay>
          <source
          src="../../assets/videos/${video}.mp4"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
        </video>`;
      previewPlayer.style.display = "block";
      userListItem.append(previewPlayer);
    }
    userList.append(userListItem);
  });
};

export default renderPreview;
