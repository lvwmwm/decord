// Module ID: 15467
// Function ID: 15468
// Name: supportedValuesOf
// Dependencies: [15468, 15470, 15472, 15474, 15476, 15478]
// Exports: supportedValuesOf

// Module 15467 (supportedValuesOf)
import _mod15468 from "module_15468" /* 15468 */;
import collations from "collations" /* 15470 */;
import _mod15472 from "module_15472" /* 15472 */;
import _mod15474 from "module_15474" /* 15474 */;
import _mod15476 from "module_15476" /* 15476 */;
import _mod15478 from "module_15478" /* 15478 */;


export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15468.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15472.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15474.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15476.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15478.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
