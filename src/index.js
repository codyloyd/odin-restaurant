import { render } from "./domController";
import header from "./header";
import tabs from "./tabs";
import footer from "./footer";

const contentDiv = document.querySelector("#content");
render([header(), tabs(), footer()], contentDiv);
