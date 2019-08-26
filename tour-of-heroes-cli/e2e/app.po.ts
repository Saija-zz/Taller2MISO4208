import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }


  navigateToDashboard() {
    element(by.linkText('Dashboard')).click();
  }


  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  buscarHeroe(nombreHeroe: string){
    element(by.id('search-box')).sendKeys(nombreHeroe);
    //element(by.id('search-box')).sendKeys(protractor.Key.ENTER);

    element(by.className('search-result')).click();
  }

  eliminarPrimerHeroe(){
    element(by.tagName('my-heroes')).all(by.tagName('li')).first().element(by.className('delete')).click();
  }


  editarPrimerHeroe(){
    element.all(by.css('.module.hero')).all(by.tagName('h4')).first().click();  
  }

  modificarNombre(nuevoNombre: string){
    element(by.tagName('input')).sendKeys(nuevoNombre);
    element(by.buttonText('Save')).click();
  }

  irPrimerHeroeListaHeroes(){
    element(by.tagName('my-heroes')).all(by.tagName('li')).first().click();
  } 


}
