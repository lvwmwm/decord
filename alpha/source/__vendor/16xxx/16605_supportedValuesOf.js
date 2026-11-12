// Module ID: 16605
// Function ID: 16606
// Name: supportedValuesOf
// Dependencies: [16606, 16608, 16610, 16612, 16614, 16616]
// Exports: supportedValuesOf

// Module 16605 (supportedValuesOf)
import _mod16606 from "module_16606" /* 16606 */;
import collations from "collations" /* 16608 */;
import _mod16610 from "module_16610" /* 16610 */;
import _mod16612 from "module_16612" /* 16612 */;
import _mod16614 from "module_16614" /* 16614 */;
import _mod16616 from "module_16616" /* 16616 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16606.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16610.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16612.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16614.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16616.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
