import { Core } from './components/Core';

const pageContainer = document.querySelector('.js-container') as HTMLElement;

const core = new Core(pageContainer);
core.init();
