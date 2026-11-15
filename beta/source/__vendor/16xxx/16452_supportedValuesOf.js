// Module ID: 16452
// Function ID: 16453
// Name: supportedValuesOf
// Dependencies: [16453, 16455, 16457, 16459, 16461, 16463]
// Exports: supportedValuesOf

// Module 16452 (supportedValuesOf)
import _mod16453 from "module_16453" /* 16453 */;
import collations from "collations" /* 16455 */;
import _mod16457 from "module_16457" /* 16457 */;
import _mod16459 from "module_16459" /* 16459 */;
import _mod16461 from "module_16461" /* 16461 */;
import _mod16463 from "module_16463" /* 16463 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16453.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16457.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16459.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16461.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16463.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
