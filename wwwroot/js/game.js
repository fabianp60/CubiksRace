import MenuTemplate from './templates/menu_template.js';

export default class Game {
    constructor() {
        this.defaultUiSize = {"width":480,"height":800};
        this.uiSize = {"width":480,"height":800};
        this.templatePosition = 0;
        this.templates = [new MenuTemplate()];
        this._init();
    }

    _init() {
        this._initDomObjects();
        this._initUiSize();
        this._initUi();
        this._initBasicEvents();
    }

    _initDomObjects() {
        this.domMain = document.querySelector('main');
        this.domHeader = document.querySelector('header');
        this.domGameSection = document.querySelector('section.game-section');
        this.domFooter = document.querySelector('footer div.game-footer');
        this.domInfo = document.querySelector('div.info');
    }

    _initUiSize() {
        this.topMargin = window.innerHeight - document.body.clientHeight;;
        if(window.innerWidth < window.innerHeight) {
            this.uiSize.width = window.innerWidth;
            this.uiSize.height = window.innerHeight;
        } else {
            this.uiSize.width = Math.floor((window.innerHeight/this.defaultUiSize.height)*this.defaultUiSize.width);
            this.uiSize.height = window.innerHeight;
        }
    }

    _initUi() {
        this.domMain.style.width = this.uiSize.width + "px";
        this.domMain.style.height = this.uiSize.height + "px";
        this.domMain.style.marginTop = this.topMargin + "px";
        this._drawTemplate();
    }

    _initBasicEvents() {
        window.addEventListener("resize", this._onWindowResize.bind(this));
    }

    _onWindowResize() {
        this._initUiSize();
        this._refreshUi();
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

    _refreshUi() {
        this.domMain.style.width = this.uiSize.width + "px";
        this.domMain.style.height = this.uiSize.height + "px";
    }

}