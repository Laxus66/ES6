
import css from "./main.module.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";


const app = document.querySelector("#app");
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/Products";
import NotFoundPage from "./pages/NotFound";
import { router, render } from "./utilities";


router.on("/", () => { render(HomePage, app) });
router.on("/about", () => render(AboutPage, app));
router.on("/products", () => render(ProductPage, app));
router.notFound(() => render(NotFoundPage, app));
router.resolve();


