const createNav = () => {
  const navbarDiv = document.createElement("div");
  navbarDiv.id = "navbar";

  // Navbar Logo Creation and append
  const linkLogo = document.createElement("a");
  linkLogo.setAttribute("href", "");
  linkLogo.insertAdjacentHTML(
    "afterbegin",
    `<img src='mochill-logo.png' id='nav-logo'></a>`
  );
  navbarDiv.appendChild(linkLogo);

  // Navbar nav links creation and append

  const linksDiv = document.createElement("div");
  linksDiv.id = "nav-links";

  navbarDiv.appendChild(linksDiv);

  const navButtonArray = ["Home", "Menu", "Contact"];

  navButtonArray.forEach((link) => {
    let navButton = document.createElement("button");
    navButton.setAttribute("id", `${link}-btn`);
    navButton.textContent = link;
    linksDiv.appendChild(navButton);
  });

  return navbarDiv;
};

const createHero = () => {
  const heroDiv = document.createElement("div");
  heroDiv.id = "hero-section";

  const heroBg = document.createElement("img");
  const heroLogoBg = document.createElement("div");
  const heroLogo = document.createElement("img");
  const heroTitle = document.createElement("span");

  heroBg.id = "hero-bg";
  heroBg.setAttribute("src", "hero-bg.png");

  heroLogoBg.id = "hero-logo-bg";

  heroLogo.id = "hero-logo";
  heroLogo.setAttribute("src", "mochill-logo.png");

  heroTitle.textContent = "Delicious and Chewy";
  heroTitle.id = "title-1";

  heroDiv.append(heroBg, heroLogoBg, heroLogo, heroTitle);

  return heroDiv;
};

const createAbout = () => {
  const aboutDiv = document.createElement("div");
  const aboutTitle = document.createElement("h1");
  const aboutInfo = document.createElement("p");

  aboutDiv.id = "about";

  aboutTitle.textContent = "About Us";
  aboutInfo.textContent =
    "We are Mochill, Japanese-style mochi donut store based in San Francisco, CA. Mochi donuts are chewy treats made from rice flour and has more texture and lighter than traditional American donuts.";

  aboutDiv.append(aboutTitle, aboutInfo);

  return aboutDiv;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.id = "footer-info";
  const footerContent = [
    "Restaurant Page by Michael Tran",
    "@ 2020 by Mochill Mochi Donut",
    "The Odin Project",
  ];

  footerContent.forEach((foot) => {
    let footerInfo = document.createElement("span");
    footerInfo.textContent = foot;
    footer.appendChild(footerInfo);
  });

  return footer;
};

export { createNav, createHero, createAbout, createFooter };
