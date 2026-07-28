// Module ID: 13320
// Function ID: 102250
// Name: supportedValuesOf
// Dependencies: [13321, 13323, 13325, 13327, 13329, 13331]

// Module 13320 (supportedValuesOf)
const require = arg1;
const dependencyMap = arg6;
arg5.supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return require(13321) /* getSupportedCalendars */.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return require(13323) /* getSupportedCollations */.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return require(13325) /* isSupportedCurrency */.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return require(13327) /* getSupportedNumberingSystems */.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return require(13329) /* getSupportedTimeZones */.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return require(13331) /* getSupportedUnits */.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
