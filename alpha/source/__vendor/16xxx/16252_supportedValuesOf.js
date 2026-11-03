// Module ID: 16252
// Function ID: 16253
// Name: supportedValuesOf
// Dependencies: [16253, 16255, 16257, 16259, 16261, 16263]
// Exports: supportedValuesOf

// Module 16252 (supportedValuesOf)
import _mod16253 from "module_16253" /* 16253 */;
import collations from "collations" /* 16255 */;
import _mod16257 from "module_16257" /* 16257 */;
import _mod16259 from "module_16259" /* 16259 */;
import _mod16261 from "module_16261" /* 16261 */;
import _mod16263 from "module_16263" /* 16263 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16253.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16257.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16259.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16261.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16263.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
