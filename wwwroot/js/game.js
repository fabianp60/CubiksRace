import MenuTemplate from './templates/menu_template.js';

export default class Game {
    constructor() {
        this.defaultUiSize = {"width":480,"height":800};
        this.uiSize = {"width":480,"height":800};
        this.windowViewport = {"width":window.innerWidth,"height":window.innerHeight};
        this.templatePosition = 0;
        this.templates = [new MenuTemplate()];
        this._init();
    }

    _init() {
        this._initDomObjects();
        this._initUiSize();
        this._initUi();
    }

    _initDomObjects() {
        this.domMain = document.querySelector('main');
        this.domHeader = document.querySelector('header');
        this.domGameSection = document.querySelector('section.game-section');
        this.domFooter = document.querySelector('footer div.game-footer');
    }

    _initUiSize() {
        if(this.windowViewport.height < this.windowViewport.width) {
            this.uiSize.width = Math.floor((this.windowViewport.height/this.defaultUiSize.height)*this.defaultUiSize.width);
            this.uiSize.height = this.windowViewport.height;
        } else {
            this.uiSize.width = this.windowViewport.width;
            this.uiSize.height = Math.floor((this.windowViewport.width/this.defaultUiSize.width)*this.defaultUiSize.height);
        }
    }

    _initUi() {
        this.domMain.style.width = this.uiSize.width + "px";
        this.domMain.style.height = this.uiSize.height + "px";
        this._drawTemplate();
    }
    
    _currentTemplate() {
        return this.templates[this.templatePosition];
    }

    _drawTemplate() {
        let curTemplate = this._currentTemplate();
        this.domHeader.innerHTML = curTemplate.headerTemplate();
        this.domGameSection.innerHTML = curTemplate.gamesectionTemplate();
        this.domFooter.innerHTML = curTemplate.footerTemplate();
    }

}