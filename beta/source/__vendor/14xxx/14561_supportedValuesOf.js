// Module ID: 14561
// Function ID: 14562
// Name: supportedValuesOf
// Dependencies: [14562, 14564, 14566, 14568, 14570, 14572]
// Exports: supportedValuesOf

// Module 14561 (supportedValuesOf)
import _mod14562 from "module_14562" /* 14562 */;
import collations from "collations" /* 14564 */;
import _mod14566 from "module_14566" /* 14566 */;
import _mod14568 from "module_14568" /* 14568 */;
import _mod14570 from "module_14570" /* 14570 */;
import _mod14572 from "module_14572" /* 14572 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14562.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14566.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14568.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14570.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14572.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
