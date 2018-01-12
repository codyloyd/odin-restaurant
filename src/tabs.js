const tabs = tabs => {
  const tabElement = document.createElement("div");
  tabElement.id = "tab-element";

  const tabsContainer = document.createElement("div");
  tabsContainer.id = "tabs-container";

  const tabContent = document.createElement("div");
  tabContent.id = "tab-content";

  tabElement.appendChild(tabsContainer);
  tabElement.appendChild(tabContent);

  tabs.forEach(tab => createTab(tab, tabsContainer, tabContent));

  return tabElement;
};

const createTab = (tab, tabsContainer, tabContent) => {
  const newTab = document.createElement("button");
  newTab.textContent = tab.title;

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
