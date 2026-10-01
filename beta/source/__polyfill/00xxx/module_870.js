// Module ID: 870
// Function ID: 871
// Dependencies: [682]
// Exports: getSentryCarrier

// Module 870
import _mod682 from "module_682" /* 682 */;


export const getSentryCarrier = () => {
  const obj = _mod682;
  const mainCarrier = obj.getMainCarrier();
  const tmp4 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp4;
  const SDK_VERSION = tmp(682).SDK_VERSION;
  const tmp5 = tmp4[_mod682.SDK_VERSION] || {};
  tmp4[SDK_VERSION] = tmp5;
  return tmp5;
};
