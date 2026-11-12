// Module ID: 16451
// Function ID: 16452
// Name: supportedValuesOf
// Dependencies: [16452, 16454, 16456, 16458, 16460, 16462]
// Exports: supportedValuesOf

// Module 16451 (supportedValuesOf)
import _mod16452 from "module_16452" /* 16452 */;
import collations from "collations" /* 16454 */;
import _mod16456 from "module_16456" /* 16456 */;
import _mod16458 from "module_16458" /* 16458 */;
import _mod16460 from "module_16460" /* 16460 */;
import _mod16462 from "module_16462" /* 16462 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16452.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16456.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16458.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16460.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16462.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
