// Module ID: 13459
// Function ID: 13460
// Name: supportedValuesOf
// Dependencies: [13460, 13462, 13464, 13466, 13468, 13470]

// Module 13459 (supportedValuesOf)
const require = arg1;
const dependencyMap = arg6;
arg5.supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return require(13460) /* getSupportedCalendars */.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return require(13462) /* getSupportedCollations */.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return require(13464) /* isSupportedCurrency */.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return require(13466) /* getSupportedNumberingSystems */.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return require(13468) /* getSupportedTimeZones */.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return require(13470) /* getSupportedUnits */.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
