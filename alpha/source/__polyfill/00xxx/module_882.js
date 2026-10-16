// Module ID: 882
// Function ID: 883
// Dependencies: [693]
// Exports: getSentryCarrier

// Module 882
import _mod693 from "module_693" /* 693 */;


export const getSentryCarrier = () => {
  const obj = _mod693;
  const mainCarrier = obj.getMainCarrier();
  const tmp4 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp4;
  const SDK_VERSION = tmp(693).SDK_VERSION;
  const tmp5 = tmp4[_mod693.SDK_VERSION] || {};
  tmp4[SDK_VERSION] = tmp5;
  return tmp5;
};
