import { render } from "./domController";
import header from "./header";
import tabs from "./tabs";
import { menu, contact, about } from "./siteContent";
import footer from "./footer";

const contentDiv = document.querySelector("#content");

render(
  [
    header(),
    tabs([
      { title: "About Us", element: about(), default: true },
      { title: "Menu", element: menu() },
      { title: "Contact Us", element: contact() }
    ]),
    footer()
  ],
  contentDiv
);
