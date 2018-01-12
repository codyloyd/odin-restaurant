const about = () => {
  const about = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "About us";
  about.appendChild(title);

  return about;
};

const menu = () => {
  const menu = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "menu us";
  menu.appendChild(title);

  return menu;
};

const contact = () => {
  const contact = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "contact us";
  contact.appendChild(title);

  return contact;
};

export { about, menu, contact };
