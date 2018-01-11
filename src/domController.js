const render = (elements, root) => {
  elements.forEach(element => {
    root.appendChild(element);
  });
};

export { render };
