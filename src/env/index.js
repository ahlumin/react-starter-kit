/**
 * Basically, the variables set on this folder are available both server and client.
 */

const LOCAL_ENV = require('./local');
const PRODUCT_ENV = require('./product');
const UAT_ENV = require('./uat');

function getEnv() {
  if (__DEV__) return LOCAL_ENV;
  if (__UAT__) return UAT_ENV;
  return PRODUCT_ENV;
}

module.exports = getEnv();
