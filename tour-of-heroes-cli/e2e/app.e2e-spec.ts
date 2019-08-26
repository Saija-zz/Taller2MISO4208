import { TourOfHeroesPage } from './app.po';


describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('Kaliman');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});


/*

busqueda de un heroe

*/
describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToDashboard();
  });

  it('should search for a  hero', () => {
    page.buscarHeroe('Kaliman');
  });

});

/*

eliminar un heroe

*/
describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should delete a hero', () => {
    page.eliminarPrimerHeroe();
  });

});


/*

editar un heroe

*/
describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToDashboard();
  });

  it('should edit a hero', () => {
    page.editarPrimerHeroe();
    page.modificarNombre('editado');
  });

});

/*

navegar heroe desde dashboard

*/
describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToDashboard();
  });

  it('navigate heroe from dashboard', () => {
    page.editarPrimerHeroe();
  });

});

/*

navegar heroe desde lista heroes

*/
describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('navigate to heroe from heroes list', () => {
    page.irPrimerHeroeListaHeroes();
  });

});

/*

navegar heroe desde busqueda

*/ 
describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToDashboard();
  });

  it('go to heroe from search', () => {
    page.buscarHeroe('Bombasto');
  });

});

