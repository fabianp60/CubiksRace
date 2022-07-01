import TemplateInterface from './template_interface.js';

export default class MenuTemplate extends TemplateInterface {
    headerTemplate() {
        return `<div class="mx-4 my-2">
                    <img class="img-fluid" src="wwwroot/images/UI/GameName.png" alt="Rubik's Race">
                </div>`;
    }

    gamesectionTemplate() {
        return `<div class="menu-buttons-container">
                    <div class="menu-button">
                        <img src="wwwroot/images/UI/TextoJuegoRapido.png" alt="Juego Rapido">
                    </div>
                    <div class="menu-button">
                        <img src="wwwroot/images/UI/TextoMultijugador.png" alt="Multijugador">
                    </div>
                    <div class="menu-button">
                        <img src="wwwroot/images/UI/TextoSalir.png" alt="Salir">
                    </div> 
                </div>`;
    }

    footerTemplate() {
        return `<div class="menu-footer-container">
                    <img src="wwwroot/images/UI/PodiumIcon.png" alt="Ranking">
                    <img src="wwwroot/images/UI/ConfigIcon.png" alt="Configurar">
                </div>`;
    }
}
