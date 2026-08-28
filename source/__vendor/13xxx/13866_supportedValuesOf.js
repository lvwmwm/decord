// Module ID: 13866
// Function ID: 13867
// Name: supportedValuesOf
// Dependencies: [13867, 13869, 13871, 13873, 13875, 13877]

// Module 13866 (supportedValuesOf)
import getSupportedCalendars from "getSupportedCalendars" /* 13867 */;
import getSupportedCollations from "getSupportedCollations" /* 13869 */;
import isSupportedCurrency from "isSupportedCurrency" /* 13871 */;
import getSupportedNumberingSystems from "getSupportedNumberingSystems" /* 13873 */;
import getSupportedTimeZones from "getSupportedTimeZones" /* 13875 */;
import getSupportedUnits from "getSupportedUnits" /* 13877 */;

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
