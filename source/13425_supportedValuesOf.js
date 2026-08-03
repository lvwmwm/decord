// Module ID: 13425
// Function ID: 13426
// Name: supportedValuesOf
// Dependencies: [13426, 13428, 13430, 13432, 13434, 13436]

// Module 13425 (supportedValuesOf)
const require = arg1;
const dependencyMap = arg6;
arg5.supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return require(13426) /* getSupportedCalendars */.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return require(13428) /* getSupportedCollations */.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return require(13430) /* isSupportedCurrency */.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return require(13432) /* getSupportedNumberingSystems */.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return require(13434) /* getSupportedTimeZones */.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return require(13436) /* getSupportedUnits */.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
