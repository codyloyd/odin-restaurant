const header = () => {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  title.textContent = "Cody's JStaurant";
  header.appendChild(title);

  header.style.textAlign = "center";

  return header;
};

export default header;
