import { Core } from './Core';

describe('Core', () => {
  const element = document.createElement('div');
  const coreComponent = new Core(element);

  it('should add two numbers', () => {
    expect(coreComponent.addTwoNumbers(2, 3)).toEqual(5);
  });

  it('should concatanate two strings', () => {
    expect(coreComponent.concatTwoStrings('hello', 'world')).toEqual('helloworld');
  });
});