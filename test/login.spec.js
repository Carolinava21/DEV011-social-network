/**
 * @jest-environment jsdom
 */
// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
import { loginEmail } from '../src/auth.js';

describe('loginEmail', () => {
  test('is a function', () => {
    expect(typeof loginEmail).toBe('function');
  });
  test('have a button', () => {
    const DOM = document.createElement('div');
    DOM.append(loginEmail());
    const haveAButton = DOM.querySelector('#buttonlogin');
    expect(haveAButton).not.toBe(undefined);
  });
});
