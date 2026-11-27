// Module ID: 15720
// Function ID: 15721
// Name: supportedValuesOf
// Dependencies: [15721, 15723, 15725, 15727, 15729, 15731]
// Exports: supportedValuesOf

// Module 15720 (supportedValuesOf)
import _mod15721 from "module_15721" /* 15721 */;
import collations from "collations" /* 15723 */;
import _mod15725 from "module_15725" /* 15725 */;
import _mod15727 from "module_15727" /* 15727 */;
import _mod15729 from "module_15729" /* 15729 */;
import _mod15731 from "module_15731" /* 15731 */;


export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15721.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15725.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15727.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15729.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15731.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
