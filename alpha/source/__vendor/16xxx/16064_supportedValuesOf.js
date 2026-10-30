// Module ID: 16064
// Function ID: 16065
// Name: supportedValuesOf
// Dependencies: [16065, 16067, 16069, 16071, 16073, 16075]
// Exports: supportedValuesOf

// Module 16064 (supportedValuesOf)
import _mod16065 from "module_16065" /* 16065 */;
import collations from "collations" /* 16067 */;
import _mod16069 from "module_16069" /* 16069 */;
import _mod16071 from "module_16071" /* 16071 */;
import _mod16073 from "module_16073" /* 16073 */;
import _mod16075 from "module_16075" /* 16075 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16065.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16069.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16071.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16073.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16075.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
