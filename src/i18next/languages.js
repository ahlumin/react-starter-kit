const ZH_TW = 'zh-TW';
const EN_HK = 'en-hk';
const JA_JP = 'ja-jp';
const whiteList = [ZH_TW, EN_HK, JA_JP];

export default {
  ZH_TW,
  EN_HK,
  JA_JP,
  DEFAULT: ZH_TW,
  whiteList,
  checkLanguage(language) {
    return whiteList.some(
      value => value.toUpperCase() === language.toUpperCase(),
    )
      ? language
      : this.DEFAULT;
  },
};
