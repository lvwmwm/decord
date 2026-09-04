// Module ID: 14204
// Function ID: 14205
// Name: supportedValuesOf
// Dependencies: [14205, 14207, 14209, 14211, 14213, 14215]

// Module 14204 (supportedValuesOf)
import getSupportedCalendars from "getSupportedCalendars" /* 14205 */;
import getSupportedCollations from "getSupportedCollations" /* 14207 */;
import isSupportedCurrency from "isSupportedCurrency" /* 14209 */;
import getSupportedNumberingSystems from "getSupportedNumberingSystems" /* 14211 */;
import getSupportedTimeZones from "getSupportedTimeZones" /* 14213 */;
import getSupportedUnits from "getSupportedUnits" /* 14215 */;

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
