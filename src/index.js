import { createNav, createHero, createAbout, createFooter } from "./home.js";
import { createMenu, createMenuTitle } from "./menu.js";

const contentDiv = document.querySelector("#content");

contentDiv.append(createNav(), createHero(), createAbout(), createFooter());

const homeBtn = document.querySelector("#Home-btn");
const menuBtn = document.querySelector("#Menu-btn");
// const contactBtn = document.querySelector("#Contact-btn");

homeBtn.addEventListener("click", () => {
  const menuDiv = document.querySelector("#menu");
  const menuTitle = document.querySelector("#menu-title");
  const footer = document.querySelector("#footer-info");
  if (contentDiv.contains(menuDiv)) {
    contentDiv.removeChild(menuDiv);
    contentDiv.removeChild(menuTitle);
    contentDiv.removeChild(footer);
  }
});
homeBtn.addEventListener("click", () => {
  contentDiv.append(createHero(), createAbout(), createFooter());
});

menuBtn.addEventListener("click", () => {
  const heroDiv = document.querySelector("#hero-section");
  const aboutDiv = document.querySelector("#about");
  const footer = document.querySelector("#footer-info");
  if (contentDiv.contains(heroDiv)) {
    contentDiv.removeChild(heroDiv);
    contentDiv.removeChild(aboutDiv);
    contentDiv.removeChild(footer);
  }
});
menuBtn.addEventListener("click", () => {
  contentDiv.append(createMenuTitle(), createMenu(), createFooter());
});
