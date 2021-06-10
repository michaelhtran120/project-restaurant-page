const createContactTitle = () => {
  const contactTitle = document.createElement("h2");

  contactTitle.textContent = "Contact Us";
  contactTitle.setAttribute("id", "contact-title");

  return contactTitle;
};

const createContactInfo = () => {
  const locations = [
    {
      location: "San Jose",
      hours: "Everyday 11 A.M. - 7:00 P.M.",
      map: {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.1718680938584!2d-121.97987984923492!3d37.31475637974685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb588e9f081b%3A0xdf0364e1b3d79363!2sMochill%20Mochidonut!5e0!3m2!1sen!2sus!4v1623342938337!5m2!1sen!2sus",
        width: "300",
        height: "300",
        style: "border:0",
        allowfullscreen: "",
        loading: "lazy",
      },
    },
    {
      location: "San Francisco",
      hours: "Everyday 11 A.M. - 7:00 P.M.",
      map: {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2104558401034!2d-122.43268974922076!3d37.78510737965816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581442b873761%3A0x5f06eb382b2f41c8!2sMochill%20Mochidonut!5e0!3m2!1sen!2sus!4v1623343051402!5m2!1sen!2sus",
        width: "300",
        height: "300",
        style: "border:0",
        allowfullscreen: "",
        loading: "lazy",
      },
    },
    {
      location: "Oakland",
      hours: "Everyday 11 A.M. - 6:30 P.M.",
      map: {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.350518104547!2d-122.23842334922078!3d37.781824479658745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f87311c316917%3A0xd66b31fb45c73126!2sMochill%20Mochi%20Donut!5e0!3m2!1sen!2sus!4v1623343090015!5m2!1sen!2sus",
        width: "300",
        height: "300",
        style: "border:0",
        allowfullscreen: "",
        loading: "lazy",
      },
    },
  ];

  function setAttributes(el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  const contactDiv = document.createElement("div");
  const locationDiv = document.createElement("div");

  contactDiv.setAttribute("id", "contact");

  locationDiv.setAttribute("id", "locations-container");

  locations.forEach((store) => {
    let storeDiv = document.createElement("div");
    let storeTitle = document.createElement("h2");
    let storeHours = document.createElement("span");
    let storeMap = document.createElement("iframe");

    storeDiv.setAttribute("class", "store");

    storeTitle.textContent = store.location;
    storeHours.textContent = store.hours;

    setAttributes(storeMap, store.map);

    storeDiv.append(storeTitle, storeHours, storeMap);

    locationDiv.append(storeDiv);
  });

  const emailDiv = document.createElement("div");
  const email = document.createElement("span");

  emailDiv.setAttribute("id", "email-div");

  email.textContent = "TAISUKEY46@GMAIL.COM";

  emailDiv.append(email);

  contactDiv.append(locationDiv, emailDiv);

  return contactDiv;
};

export { createContactTitle, createContactInfo };
