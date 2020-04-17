import path from 'path';
import i18n from 'i18next';
import i18nextMiddleware from 'i18next-express-middleware';
import Backend from 'i18next-node-fs-backend';

import commonOptions from './options';

const options = {
  backend: {
    loadPath: path.resolve(__dirname, '../i18n/{{lng}}/{{ns}}.json'),
  },
  ...commonOptions,
};

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(options);

export default i18n;
