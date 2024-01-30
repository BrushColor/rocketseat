export class Router {
  routes = {}

  add(routeName, page, background) {
    this.routes[routeName] = { page, background }
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes["404"]

    document.querySelectorAll("nav a").forEach((link) => {
      link.classList.remove("active")
    })

    const activeLink = document.querySelector(`nav a[href="${pathname}"]`)
    if (activeLink) {
      activeLink.classList.add("active")
    }

    this.changeBackground(route.background)

    fetch(route.page)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
      })
  
    .catch(() => {
      console.error("Erro ao carregar a página:", route.page);
      this.returnToHome();
    });
  }

  changeBackground(background) {
    if (background) {
      const elementBackground = document.body
      elementBackground.style.background = background
    }
  }

  returnToHome() {
    window.history.pushState({}, "", "/")
    this.route()
  }
}


