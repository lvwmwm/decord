// Module ID: 15527
// Function ID: 15528
// Name: supportedValuesOf
// Dependencies: [15528, 15530, 15532, 15534, 15536, 15538]
// Exports: supportedValuesOf

// Module 15527 (supportedValuesOf)
import _mod15528 from "module_15528" /* 15528 */;
import collations from "collations" /* 15530 */;
import _mod15532 from "module_15532" /* 15532 */;
import _mod15534 from "module_15534" /* 15534 */;
import _mod15536 from "module_15536" /* 15536 */;
import _mod15538 from "module_15538" /* 15538 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15528.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15532.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15534.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15536.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15538.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
