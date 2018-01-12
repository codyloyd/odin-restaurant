const footer = footer => {
  const footerElement = document.createElement("div");
  footerElement.id = "footer";
  footerElement.textContent = "this is a footer.  stuff goes here";

  Object.assign(footerElement.style, {
    position: "absolute",
    bottom: "0px",
    fontSize: "22px",
    borderTop: "1px solid #ccc",
    width: "100%",
    padding: "22px 0",
    textAlign: "center"
  });

  return footerElement;
};

export default footer;
