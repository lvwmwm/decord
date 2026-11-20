// Module ID: 15396
// Function ID: 15397
// Name: supportedValuesOf
// Dependencies: [15397, 15399, 15401, 15403, 15405, 15407]
// Exports: supportedValuesOf

// Module 15396 (supportedValuesOf)
import _mod15397 from "module_15397" /* 15397 */;
import collations from "collations" /* 15399 */;
import _mod15401 from "module_15401" /* 15401 */;
import _mod15403 from "module_15403" /* 15403 */;
import _mod15405 from "module_15405" /* 15405 */;
import _mod15407 from "module_15407" /* 15407 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15397.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15401.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15403.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15405.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15407.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
