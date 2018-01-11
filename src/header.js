const header = () => {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  title.textContent = "Gerry's Restaurant";
  header.appendChild(title);

  return header;
};

export default header;
