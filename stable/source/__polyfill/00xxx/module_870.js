// Module ID: 870
// Function ID: 871
// Dependencies: [681]
// Exports: getSentryCarrier

// Module 870
import _mod681 from "module_681" /* 681 */;


export const getSentryCarrier = () => {
  const obj = _mod681;
  const mainCarrier = obj.getMainCarrier();
  const tmp4 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp4;
  const SDK_VERSION = tmp(681).SDK_VERSION;
  const tmp5 = tmp4[_mod681.SDK_VERSION] || {};
  tmp4[SDK_VERSION] = tmp5;
  return tmp5;
};
