const createMenu = () => {
  const menuArray = [
    {
      name: "Dark Choco",
      src: "dark-choco.png",
    },
    {
      name: "Peanut Butter Jelly",
      src: "pb-jelly.png",
    },
    {
      name: "Matcha",
      src: "matcha.png",
    },
    {
      name: "Black Sesame",
      src: "black-sesame.png",
    },
    {
      name: "White Choco Berry",
      src: "white-choco-berry.png",
    },
    { name: "fruity-pebbles", src: "fruity-pebbles.png" },
  ];
  const menuDiv = document.createElement("div");

  menuDiv.id = "menu";

  menuArray.forEach((item) => {
    let itemDiv = document.createElement("div");
    let itemTitle = document.createElement("h2");
    let itemImg = document.createElement("img");

    itemDiv.setAttribute("id", `menu-item${menuArray.indexOf(item)}`);
    itemTitle.textContent = item.name;
    itemImg.setAttribute("src", `${item.src}`);

    itemDiv.append(itemTitle, itemImg);
    menuDiv.append(itemDiv);
  });

  return menuDiv;
};

const createMenuTitle = () => {
  const menuTitle = document.createElement("h2");

  menuTitle.textContent = "Mochi Donut Menu";
  menuTitle.setAttribute("id", "menu-title");

  return menuTitle;
};

export { createMenu, createMenuTitle };
