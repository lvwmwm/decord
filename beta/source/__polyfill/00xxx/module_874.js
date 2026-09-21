// Module ID: 874
// Function ID: 875
// Dependencies: [686]
// Exports: getSentryCarrier

// Module 874
import _mod686 from "module_686" /* 686 */;

require = arg1;
const dependencyMap = arg6;

export const getSentryCarrier = () => {
  const mainCarrier = _mod686.getMainCarrier();
  const tmp4 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp4;
  const tmp5 = tmp4[_mod686.SDK_VERSION] || {};
  tmp4[_mod686.SDK_VERSION] = tmp5;
  return tmp5;
};
