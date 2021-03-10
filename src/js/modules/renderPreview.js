import transliterationRU from "./trasnsliteration";
const renderPreview = data => {
  const userList = document.querySelector("#preview .user__list");
  userList.innerHTML = "";
  data.map(({ id, age, image, name, phone, phrase, video }) => {
    // if (/[A-Za-z]/.test(name.ru)) {
    //   name.ru = transliterationRU(name.ru);
    //   console.log(name.ru);
    // }

    const userListItem = document.createElement("div");
    const previewPlayer = document.createElement("div");
    userListItem.classList.add("user");
    userListItem.setAttribute("data-sort-id", id);
    userListItem.innerHTML = `
        <div class="user__avatar">
          <img src="../../assets/images/${image}.svg" alt="${image}" />
        </div>
        <div class="user__name name" data-sort-item="name">
          <span data-lang="en">${name.en}</span>
          <span data-lang="ru">${name.ru}</span>
        </div>
        <div class="user__age data-sort-item="age">${age}</div>
        <div class="user__tel">${phone}</div>
        <div class="user__important-star">&#9734;</div>
      
        <div class="user__descr">
          <span data-lang="en">${phrase.en}</span>
          <span data-lang="ru">${phrase.ru}</span>
        <div>`;

    if (video) {
      userListItem.classList.add("user_fullsize");
      previewPlayer.classList.add("user__video");
      previewPlayer.innerHTML = `
        <video width="100%" height="100%" controls>
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
