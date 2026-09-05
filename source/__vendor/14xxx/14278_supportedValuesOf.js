// Module ID: 14278
// Function ID: 14279
// Name: supportedValuesOf
// Dependencies: [14279, 14281, 14283, 14285, 14287, 14289]

// Module 14278 (supportedValuesOf)
import getSupportedCalendars from "getSupportedCalendars" /* 14279 */;
import getSupportedCollations from "getSupportedCollations" /* 14281 */;
import isSupportedCurrency from "isSupportedCurrency" /* 14283 */;
import getSupportedNumberingSystems from "getSupportedNumberingSystems" /* 14285 */;
import getSupportedTimeZones from "getSupportedTimeZones" /* 14287 */;
import getSupportedUnits from "getSupportedUnits" /* 14289 */;

require = arg1;
const dependencyMap = arg6;
arg5.supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return getSupportedCalendars.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return getSupportedCollations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return isSupportedCurrency.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return getSupportedNumberingSystems.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return getSupportedTimeZones.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return getSupportedUnits.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
