export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'home/welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'home/users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'home/child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
