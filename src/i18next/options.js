import LANGUAGES from './languages';
import ns from './namespaces';
import config from '../config';

export default {
  // document: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  fallbackLng: LANGUAGES.DEFAULT,
  load: 'currentOnly',
  ns,
  defaultNS: 'common',
  whiteList: LANGUAGES.whiteList,

  // document: https://www.i18next.com/translation-function/interpolation
  interpolation: {
    escapeValue: false,
  },

  /**
   * document server: https://github.com/i18next/i18next-express-middleware#detector-options
   * document client: https://github.com/i18next/i18next-browser-languageDetector#detector-options
   */
  detection: {
    order: ['path', 'querystring', 'localStorage', 'cookie'],
    lookupCookie: 'userLng',
    lookupQuerystring: 'lang',

    ...(process.env.BROWSER
      ? {
          cookieDomain: config.AppDomain,
          caches: ['cookie'],
        }
      : {}),
  },

  // document: https://react.i18next.com/latest/i18next-instance
  react: {
    useSuspense: false,
  },
};
