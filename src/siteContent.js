const about = () => {
  const about = document.createElement("div");
  const title = document.createElement("h1");
  const content = document.createElement("p");
  title.textContent = "About us";
  content.textContent =
    "This site was created using only vanilla javascript.  It is a bit experimental, and the point of it is more the code that generates it than the actual appearance or content.  So... I know it's ugly, but I don't really care.";
  content.style.fontSize = "22px";
  content.style.lineHeight = "1.5";
  about.appendChild(title);
  about.appendChild(content);

  return about;
};

const menu = () => {
  const menu = document.createElement("div");
  const title = document.createElement("h1");
  const content = document.createElement("div");
  title.textContent = "menu";

  content.innerHTML = `
  <ul>
    <li>menu item 1</li>
    <li>menu item 2</li>
    <li>menu item 3</li>
    <li>menu item 4</li>
  </ul>
  `;
  content.style.fontSize = "22px";
  content.style.lineHeight = "1.5";
  menu.appendChild(title);
  menu.appendChild(content);

  return menu;
};

const contact = () => {
  const contact = document.createElement("div");
  const title = document.createElement("h1");
  const content = document.createElement("div");
  title.textContent = "contact us";
  content.innerHTML = `
    <a href="https://github.com/codyloyd">this is a link to my github profile</a>
  `;
  content.style.fontSize = "22px";
  contact.appendChild(title);
  contact.appendChild(content);

  return contact;
};

export { about, menu, contact };
