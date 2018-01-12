import { autobind } from 'core-decorators';
import { CLASS_NAMES } from '../constants';

export class Core {
  elem: HTMLElement;

  constructor(elem: HTMLElement) {
    this.elem = elem;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('load', this.activateElement);
  }

  @autobind
  activateElement() {
    this.elem.classList.add(CLASS_NAMES.ACTIVE);
  }
}
