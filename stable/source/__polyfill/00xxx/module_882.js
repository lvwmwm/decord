// Module ID: 882
// Function ID: 883
// Dependencies: [694]
// Exports: getSentryCarrier

// Module 882
import _mod694 from "module_694" /* 694 */;


export const getSentryCarrier = () => {
  const obj = _mod694;
  const mainCarrier = obj.getMainCarrier();
  const tmp4 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp4;
  const SDK_VERSION = tmp(694).SDK_VERSION;
  const tmp5 = tmp4[_mod694.SDK_VERSION] || {};
  tmp4[SDK_VERSION] = tmp5;
  return tmp5;
};
