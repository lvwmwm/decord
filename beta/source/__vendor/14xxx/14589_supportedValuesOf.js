// Module ID: 14589
// Function ID: 14590
// Name: supportedValuesOf
// Dependencies: [14590, 14592, 14594, 14596, 14598, 14600]
// Exports: supportedValuesOf

// Module 14589 (supportedValuesOf)
import _mod14590 from "module_14590" /* 14590 */;
import collations from "collations" /* 14592 */;
import _mod14594 from "module_14594" /* 14594 */;
import _mod14596 from "module_14596" /* 14596 */;
import _mod14598 from "module_14598" /* 14598 */;
import _mod14600 from "module_14600" /* 14600 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14590.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14594.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14596.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14598.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14600.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
