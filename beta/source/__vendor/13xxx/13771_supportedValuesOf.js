// Module ID: 13771
// Function ID: 13772
// Name: supportedValuesOf
// Dependencies: [13772, 13774, 13776, 13778, 13780, 13782]
// Exports: supportedValuesOf

// Module 13771 (supportedValuesOf)
import _mod13772 from "module_13772" /* 13772 */;
import collations from "collations" /* 13774 */;
import _mod13776 from "module_13776" /* 13776 */;
import _mod13778 from "module_13778" /* 13778 */;
import _mod13780 from "module_13780" /* 13780 */;
import _mod13782 from "module_13782" /* 13782 */;


export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13772.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13776.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13778.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13780.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13782.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
