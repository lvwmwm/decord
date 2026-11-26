// Module ID: 15531
// Function ID: 15532
// Name: supportedValuesOf
// Dependencies: [15532, 15534, 15536, 15538, 15540, 15542]
// Exports: supportedValuesOf

// Module 15531 (supportedValuesOf)
import _mod15532 from "module_15532" /* 15532 */;
import collations from "collations" /* 15534 */;
import _mod15536 from "module_15536" /* 15536 */;
import _mod15538 from "module_15538" /* 15538 */;
import _mod15540 from "module_15540" /* 15540 */;
import _mod15542 from "module_15542" /* 15542 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15532.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15536.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15538.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15540.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15542.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
