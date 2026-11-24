// Module ID: 15540
// Function ID: 15541
// Name: supportedValuesOf
// Dependencies: [15541, 15543, 15545, 15547, 15549, 15551]
// Exports: supportedValuesOf

// Module 15540 (supportedValuesOf)
import _mod15541 from "module_15541" /* 15541 */;
import collations from "collations" /* 15543 */;
import _mod15545 from "module_15545" /* 15545 */;
import _mod15547 from "module_15547" /* 15547 */;
import _mod15549 from "module_15549" /* 15549 */;
import _mod15551 from "module_15551" /* 15551 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15541.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15545.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15547.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15549.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15551.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
