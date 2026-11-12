// Module ID: 16454
// Function ID: 16455
// Name: supportedValuesOf
// Dependencies: [16455, 16457, 16459, 16461, 16463, 16465]
// Exports: supportedValuesOf

// Module 16454 (supportedValuesOf)
import _mod16455 from "module_16455" /* 16455 */;
import collations from "collations" /* 16457 */;
import _mod16459 from "module_16459" /* 16459 */;
import _mod16461 from "module_16461" /* 16461 */;
import _mod16463 from "module_16463" /* 16463 */;
import _mod16465 from "module_16465" /* 16465 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16455.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16459.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16461.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16463.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16465.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
