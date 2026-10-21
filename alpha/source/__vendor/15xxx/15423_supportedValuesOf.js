// Module ID: 15423
// Function ID: 15424
// Name: supportedValuesOf
// Dependencies: [15424, 15426, 15428, 15430, 15432, 15434]
// Exports: supportedValuesOf

// Module 15423 (supportedValuesOf)
import _mod15424 from "module_15424" /* 15424 */;
import collations from "collations" /* 15426 */;
import _mod15428 from "module_15428" /* 15428 */;
import _mod15430 from "module_15430" /* 15430 */;
import _mod15432 from "module_15432" /* 15432 */;
import _mod15434 from "module_15434" /* 15434 */;


export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15424.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15428.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15430.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15432.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15434.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
