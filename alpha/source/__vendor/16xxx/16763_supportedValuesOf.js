// Module ID: 16763
// Function ID: 16764
// Name: supportedValuesOf
// Dependencies: [16764, 16766, 16768, 16770, 16772, 16774]
// Exports: supportedValuesOf

// Module 16763 (supportedValuesOf)
import _mod16764 from "module_16764" /* 16764 */;
import collations from "collations" /* 16766 */;
import _mod16768 from "module_16768" /* 16768 */;
import _mod16770 from "module_16770" /* 16770 */;
import _mod16772 from "module_16772" /* 16772 */;
import _mod16774 from "module_16774" /* 16774 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16764.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16768.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16770.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16772.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16774.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
