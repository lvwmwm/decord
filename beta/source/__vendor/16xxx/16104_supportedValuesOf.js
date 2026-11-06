// Module ID: 16104
// Function ID: 16105
// Name: supportedValuesOf
// Dependencies: [16105, 16107, 16109, 16111, 16113, 16115]
// Exports: supportedValuesOf

// Module 16104 (supportedValuesOf)
import _mod16105 from "module_16105" /* 16105 */;
import collations from "collations" /* 16107 */;
import _mod16109 from "module_16109" /* 16109 */;
import _mod16111 from "module_16111" /* 16111 */;
import _mod16113 from "module_16113" /* 16113 */;
import _mod16115 from "module_16115" /* 16115 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16105.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16109.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16111.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16113.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16115.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
