// Module ID: 14537
// Function ID: 14538
// Name: supportedValuesOf
// Dependencies: [14538, 14540, 14542, 14544, 14546, 14548]
// Exports: supportedValuesOf

// Module 14537 (supportedValuesOf)
import _mod14538 from "module_14538" /* 14538 */;
import collations from "collations" /* 14540 */;
import _mod14542 from "module_14542" /* 14542 */;
import _mod14544 from "module_14544" /* 14544 */;
import _mod14546 from "module_14546" /* 14546 */;
import _mod14548 from "module_14548" /* 14548 */;


export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14538.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14542.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14544.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14546.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14548.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
