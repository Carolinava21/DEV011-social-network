/**
 * @jest-environment jsdom
 */

// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
// import { jest } from '@jest/globals';
import { expect } from '@jest/globals';
import {
  authGoogle, loginEmail,
} from '../src/auth.js';
import * as prueba from '../src/auth.js';
import { register } from '../src/elements/register.js';
import * as home from '../src/elements/home.js';
import { likePost } from '../src/lib/index.js';
// import * as test from '../src/lib/index.js';

describe('authGoogle', () => {
  test('is a function', () => {
    expect(typeof authGoogle).toBe('function');
  });
});
test('have a button', () => {
  const DOM = document.createElement('div');
  DOM.append(loginEmail());
  const haveAButton = DOM.querySelector('#buttonLogin');
  expect(haveAButton).not.toBe(undefined);
});

describe('button login', () => {
  test('testing button NewUser', () => {
    const spyNewUser = jest.spyOn(prueba, 'NewUser').mockImplementation(() => Promise.resolve());
    const navigateTo = jest.fn();
    const DOM = document.createElement('div');
    DOM.append(register(navigateTo));
    const email = DOM.querySelector('#emailR');
    const password = DOM.querySelector('#passwordR');
    const buttonLogin = DOM.querySelector('#buttonLogin');
    email.value = 'prueba@prueba49.com';
    password.value = '123456';
    buttonLogin.click();

    setTimeout(() => {
      expect(navigateTo).toHaveBeenCalledWith('/login');
    });
  });
});
// prueba boton like
test('like button', () => {
  const DOM = document.createElement('div');
  DOM.append((likePost));
  const likeButton = DOM.querySelector('.like-icon');
  expect(likeButton).not.toBe(undefined);
});

// prueba función like
describe('likePost', () => {
  test('the function adds likes', () => {
    const likedPosts = likePost('likes', 'docData');
    expect(likedPosts).toBeDefined();
  });
});
