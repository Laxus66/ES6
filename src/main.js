const app = document.querySelector("#app")

import css from "./main.module.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"

import { router, render } from "./utilities"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProductPage from "./pages/Products"
import NotFoundPage from "./pages/NotFound"


router.on("/", () => render(HomePage, app))
router.on("/about", () => render(AboutPage, app))
router.on("/products", () => render(ProductPage, app))
router.notFound(() => render(NotFoundPage, app))
router.resolve()

