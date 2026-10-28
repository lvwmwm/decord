// Module ID: 15788
// Function ID: 15789
// Name: supportedValuesOf
// Dependencies: [15789, 15791, 15793, 15795, 15797, 15799]
// Exports: supportedValuesOf

// Module 15788 (supportedValuesOf)
import _mod15789 from "module_15789" /* 15789 */;
import collations from "collations" /* 15791 */;
import _mod15793 from "module_15793" /* 15793 */;
import _mod15795 from "module_15795" /* 15795 */;
import _mod15797 from "module_15797" /* 15797 */;
import _mod15799 from "module_15799" /* 15799 */;


export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15789.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15793.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15795.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15797.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15799.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
