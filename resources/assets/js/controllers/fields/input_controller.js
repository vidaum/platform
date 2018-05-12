import {Controller} from "stimulus";
import Inputmask from "inputmask";

export default class extends Controller {

    /**
     *
     */
    connect() {
        let element = this.element.querySelector('input');
        Inputmask(element.dataset.mask).mask(element);
    }
}