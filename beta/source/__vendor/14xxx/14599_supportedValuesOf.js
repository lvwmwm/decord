// Module ID: 14599
// Function ID: 14600
// Name: supportedValuesOf
// Dependencies: [14600, 14602, 14604, 14606, 14608, 14610]
// Exports: supportedValuesOf

// Module 14599 (supportedValuesOf)
import _mod14600 from "module_14600" /* 14600 */;
import collations from "collations" /* 14602 */;
import _mod14604 from "module_14604" /* 14604 */;
import _mod14606 from "module_14606" /* 14606 */;
import _mod14608 from "module_14608" /* 14608 */;
import _mod14610 from "module_14610" /* 14610 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14600.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14604.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14606.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14608.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14610.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
