import { Router } from "./routers.js"

const router = new Router()
router.add(
  "/",
  "/pages/home.html",
  "url(../assets/montanha.png) center/cover no-repeat"
)
router.add(
  "/universe",
  "/pages/universe.html", "url(../assets/montanha2.png) center/cover no-repeat"
)
router.add(
  "/explorer",
  "/pages/explorer.html",
  "url(../assets/montanha3.png) center/cover no-repeat"
)
router.add(
  404,
  "/pages/404.html",
  "url(../assets/montanha.png) center/cover no-repeat"
)
window.router = router
router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
window.returnToHome = () => router.returnToHome()

