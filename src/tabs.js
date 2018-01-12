const tabs = tabs => {
  const tabElement = document.createElement("div");
  tabElement.id = "tab-element";

  const tabsContainer = document.createElement("div");
  tabsContainer.id = "tabs-container";

  Object.assign(tabsContainer.style, {
    display: "flex",
    justifyContent: "center"
  });

  const tabContent = document.createElement("div");
  tabContent.id = "tab-content";

  Object.assign(tabContent.style, {
    border: "1px solid #eee",
    padding: "16px",
    maxWidth: "650px",
    margin: "0 auto"
  });

  tabElement.appendChild(tabsContainer);
  tabElement.appendChild(tabContent);

  tabs.forEach(tab => createTab(tab, tabsContainer, tabContent));

  return tabElement;
};

const createTab = (tab, tabsContainer, tabContent) => {
  const newTab = document.createElement("button");
  newTab.textContent = tab.title;

  Object.assign(newTab.style, {
    border: "none",
    fontSize: "16px",
    padding: "8px 16px",
    background: "#eee",
    margin: "-1px 4px"
  });

  newTab.onclick = () => {
    tabContent.innerHTML = "";
    tabContent.appendChild(tab.element);
  };

  tabsContainer.appendChild(newTab);
  if (tab.default) {
    tabContent.innerHtml = "";
    tabContent.appendChild(tab.element);
  }
};

export default tabs;
