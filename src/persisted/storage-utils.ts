import * as Cookies from 'js-cookie';

export const getLocalStorageItem = (key: string): string | null => {
  return window.localStorage.getItem(key);
};

export const setLocalStorageItem = (key: string, value: string): void => {
  window.localStorage.setItem(key, value);
};

export const removeLocalStorageItem = (key: string): void => {
  window.localStorage.removeItem(key);
};

export const getSessionStorageItem = (key: string): string | null => {
  return window.sessionStorage.getItem(key);
};

export const setSessionStorageItem = (key: string, value: string): void => {
  window.sessionStorage.setItem(key, value);
};

export const removeSessionStorageItem = (key: string): void => {
  window.sessionStorage.removeItem(key);
};

export const getCookie = (key: string): string | null => {
  return Cookies.get(key) || null;
};

export const setCookie = (key: string, value: string): void => {
  Cookies.set(key, value);
};

export const removeCookie = (key: string): void => {
  Cookies.remove(key);
};
