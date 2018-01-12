import { CLASS_NAMES } from '../constants';

export class Core {
  elem: HTMLElement;

  constructor(elem: HTMLElement) {
    this.elem = elem;
  }

  init() {
    this.elem.classList.add(CLASS_NAMES.ACTIVE);
  }
}
