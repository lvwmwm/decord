// Module ID: 13081
// Function ID: 99384
// Name: supportedValuesOf
// Dependencies: []

// Module 13081 (supportedValuesOf)
arg5.supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return locale(arg6[0]).getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return locale(arg6[1]).getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return locale(arg6[2]).getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return locale(arg6[3]).getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return locale(arg6[4]).getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return locale(arg6[5]).getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
