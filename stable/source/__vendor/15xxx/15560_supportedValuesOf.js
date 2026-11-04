// Module ID: 15560
// Function ID: 15561
// Name: supportedValuesOf
// Dependencies: [15561, 15563, 15565, 15567, 15569, 15571]
// Exports: supportedValuesOf

// Module 15560 (supportedValuesOf)
import _mod15561 from "module_15561" /* 15561 */;
import collations from "collations" /* 15563 */;
import _mod15565 from "module_15565" /* 15565 */;
import _mod15567 from "module_15567" /* 15567 */;
import _mod15569 from "module_15569" /* 15569 */;
import _mod15571 from "module_15571" /* 15571 */;


export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15561.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15565.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15567.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15569.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15571.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
