import TemplateInterface from './template_interface.js';

export default class MenuTemplate extends TemplateInterface {
    headerTemplate() {
        return `<div class="mx-4 my-2">
                    <img class="img-fluid" src="wwwroot/images/UI/GameName.png" alt="Rubik's Race">
                </div>`;
    }

    gamesectionTemplate() {
        return `0-0`;
    }
}
