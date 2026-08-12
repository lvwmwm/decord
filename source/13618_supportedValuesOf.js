// Module ID: 13618
// Function ID: 13619
// Name: supportedValuesOf
// Dependencies: [13619, 13621, 13623, 13625, 13627, 13629]

// Module 13618 (supportedValuesOf)
const require = arg1;
const dependencyMap = arg6;
arg5.supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return require(13619) /* getSupportedCalendars */.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return require(13621) /* getSupportedCollations */.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return require(13623) /* isSupportedCurrency */.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return require(13625) /* getSupportedNumberingSystems */.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return require(13627) /* getSupportedTimeZones */.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return require(13629) /* getSupportedUnits */.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
