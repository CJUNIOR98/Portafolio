// IMPORTACIONES
import { hamburguerMenu } from "./modules/hamburguer-menu.js";
import { cargar } from "./modules/skills-progress.js";
import { slideServices } from "./modules/slide-services.js";
import { mediaResponsiveFunction } from "./modules/set-function-responsive.js";
import { sacudirClick, sacudirMouseOver, sacudirObserver } from "./modules/rotate-animation.js";
import { deleteObserver, observerMenu } from "./modules/observer-menu.js";
import validarFormulario from "./modules/validar-formulario.js";
import { enviarInformacion } from "./modules/submit-contact.js";
import scrollTopButton from "./modules/boton-scroll.js";


// VARIABLES
const d = document;

d.addEventListener('DOMContentLoaded', e => {
    hamburguerMenu('.btn--menu', '.menu', '.menu-link');
    slideServices();
    cargar();
    mediaResponsiveFunction(1024, sacudirMouseOver, sacudirObserver, 768, sacudirClick);
    mediaResponsiveFunction(1024, observerMenu, deleteObserver);
    validarFormulario('form-contact');
    enviarInformacion('form-contact');
    mediaResponsiveFunction(1024, scrollTopButton, scrollTopButton);
});