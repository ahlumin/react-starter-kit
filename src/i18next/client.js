import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import commonOptions from './options';

const options = {
  backend: {
    loadPath: '/i18n/{{lng}}/{{ns}}.json',
  },
  ...commonOptions,
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(options);

if (!i18n.isInitialized) {
  i18n.init(options);
}

export default i18n;
