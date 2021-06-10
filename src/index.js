import { createNav, createHero, createAbout, createFooter } from "./home.js";
import { createMenu, createMenuTitle } from "./menu.js";
import { createContactTitle, createContactInfo } from "./contact.js";

const contentDiv = document.querySelector("#content");

contentDiv.append(createNav(), createHero(), createAbout(), createFooter());

const homeBtn = document.querySelector("#Home-btn");
const menuBtn = document.querySelector("#Menu-btn");
const contactBtn = document.querySelector("#Contact-btn");

homeBtn.classList.add("active");

homeBtn.addEventListener("click", () => {
  const menuDiv = document.querySelector("#menu");
  const menuTitle = document.querySelector("#menu-title");
  const footer = document.querySelector("#footer-info");
  const contactDiv = document.querySelector("#contact");
  const contactTitle = document.querySelector("#contact-title");

  if (contentDiv.contains(menuDiv)) {
    contentDiv.removeChild(menuDiv);
    contentDiv.removeChild(menuTitle);
  }
  if (contentDiv.contains(contactDiv)) {
    contentDiv.removeChild(contactDiv);
    contentDiv.removeChild(contactTitle);
  }
  contentDiv.removeChild(footer);

  menuBtn.classList.remove("active");
  contactBtn.classList.remove("active");
  homeBtn.classList.add("active");

  contentDiv.append(createHero(), createAbout(), createFooter());
});

menuBtn.addEventListener("click", () => {
  const heroDiv = document.querySelector("#hero-section");
  const aboutDiv = document.querySelector("#about");
  const footer = document.querySelector("#footer-info");
  const contactDiv = document.querySelector("#contact");
  const contactTitle = document.querySelector("#contact-title");

  if (contentDiv.contains(heroDiv)) {
    contentDiv.removeChild(heroDiv);
    contentDiv.removeChild(aboutDiv);
  }
  if (contentDiv.contains(contactDiv)) {
    contentDiv.removeChild(contactDiv);
    contentDiv.removeChild(contactTitle);
  }
  contentDiv.removeChild(footer);

  homeBtn.classList.remove("active");
  contactBtn.classList.remove("active");
  menuBtn.classList.add("active");

  contentDiv.append(createMenuTitle(), createMenu(), createFooter());
});

contactBtn.addEventListener("click", () => {
  const heroDiv = document.querySelector("#hero-section");
  const aboutDiv = document.querySelector("#about");
  const menuDiv = document.querySelector("#menu");
  const menuTitle = document.querySelector("#menu-title");
  const footer = document.querySelector("#footer-info");

  if (contentDiv.contains(heroDiv)) {
    contentDiv.removeChild(heroDiv);
    contentDiv.removeChild(aboutDiv);
  }
  if (contentDiv.contains(menuDiv)) {
    contentDiv.removeChild(menuDiv);
    contentDiv.removeChild(menuTitle);
  }
  contentDiv.removeChild(footer);

  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  contactBtn.classList.add("active");

  contentDiv.append(createContactTitle(), createContactInfo(), createFooter());
});
