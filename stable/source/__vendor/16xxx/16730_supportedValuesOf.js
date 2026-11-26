// Module ID: 16730
// Function ID: 16731
// Name: supportedValuesOf
// Dependencies: [16731, 16733, 16735, 16737, 16739, 16741]
// Exports: supportedValuesOf

// Module 16730 (supportedValuesOf)
import _mod16731 from "module_16731" /* 16731 */;
import collations from "collations" /* 16733 */;
import _mod16735 from "module_16735" /* 16735 */;
import _mod16737 from "module_16737" /* 16737 */;
import _mod16739 from "module_16739" /* 16739 */;
import _mod16741 from "module_16741" /* 16741 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16731.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16735.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16737.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16739.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16741.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
