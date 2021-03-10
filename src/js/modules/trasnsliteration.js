const transliterationRU = str => {
  const translit = {
    j: "Х",
    u: "y",
    n: "н",
    v: "в",
    a: "а",
    s: "с",
    q: "к",
    e: "е",
    z: "з",
  };
  let newStr = "";
  str.split("").map((item, i) => {
    if (/[A-Za-z]/.test(item)) {
      for (let key in translit) {
        if (item === key) {
          newStr += translit[key];
        } else if (item === key.toUpperCase()) {
          if (i !== 0) {
            newStr += " ";
          }
          newStr += translit[key].toUpperCase();
        }
      }
    }
  });
  return newStr;
};

export default transliterationRU;
