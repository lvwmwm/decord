// Module ID: 15333
// Function ID: 15334
// Name: supportedValuesOf
// Dependencies: [15334, 15336, 15338, 15340, 15342, 15344]
// Exports: supportedValuesOf

// Module 15333 (supportedValuesOf)
import _mod15334 from "module_15334" /* 15334 */;
import collations from "collations" /* 15336 */;
import _mod15338 from "module_15338" /* 15338 */;
import _mod15340 from "module_15340" /* 15340 */;
import _mod15342 from "module_15342" /* 15342 */;
import _mod15344 from "module_15344" /* 15344 */;


export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15334.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15338.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15340.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15342.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15344.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
