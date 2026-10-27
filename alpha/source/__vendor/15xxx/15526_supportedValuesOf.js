// Module ID: 15526
// Function ID: 15527
// Name: supportedValuesOf
// Dependencies: [15527, 15529, 15531, 15533, 15535, 15537]
// Exports: supportedValuesOf

// Module 15526 (supportedValuesOf)
import _mod15527 from "module_15527" /* 15527 */;
import collations from "collations" /* 15529 */;
import _mod15531 from "module_15531" /* 15531 */;
import _mod15533 from "module_15533" /* 15533 */;
import _mod15535 from "module_15535" /* 15535 */;
import _mod15537 from "module_15537" /* 15537 */;


export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15527.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15531.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15533.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15535.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15537.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
