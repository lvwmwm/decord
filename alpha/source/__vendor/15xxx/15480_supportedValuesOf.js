// Module ID: 15480
// Function ID: 15481
// Name: supportedValuesOf
// Dependencies: [15481, 15483, 15485, 15487, 15489, 15491]
// Exports: supportedValuesOf

// Module 15480 (supportedValuesOf)
import _mod15481 from "module_15481" /* 15481 */;
import collations from "collations" /* 15483 */;
import _mod15485 from "module_15485" /* 15485 */;
import _mod15487 from "module_15487" /* 15487 */;
import _mod15489 from "module_15489" /* 15489 */;
import _mod15491 from "module_15491" /* 15491 */;


export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15481.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15485.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15487.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15489.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15491.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
