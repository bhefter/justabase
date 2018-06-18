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
    if (!this.elem) { return; }

    this.elem.classList.add(CLASS_NAMES.ACTIVE);
  }

  addTwoNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }

  concatTwoStrings(string1: string, string2: string): string {
    return `${string1}${string2}`;
  }
}
