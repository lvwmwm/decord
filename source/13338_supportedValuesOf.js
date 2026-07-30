// Module ID: 13338
// Function ID: 13339
// Name: supportedValuesOf
// Dependencies: [13339, 13341, 13343, 13345, 13347, 13349]

// Module 13338 (supportedValuesOf)
const require = arg1;
const dependencyMap = arg6;
arg5.supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return require(13339) /* getSupportedCalendars */.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return require(13341) /* getSupportedCollations */.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return require(13343) /* isSupportedCurrency */.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return require(13345) /* getSupportedNumberingSystems */.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return require(13347) /* getSupportedTimeZones */.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return require(13349) /* getSupportedUnits */.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
