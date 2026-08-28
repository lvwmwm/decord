// Module ID: 13844
// Function ID: 13845
// Name: isMissingLocaleDataError
// Dependencies: [1281]
// Exports: isMissingLocaleDataError

// Module 13844 (isMissingLocaleDataError)
import e from "e" /* 1281 */;

e.__extends(function MissingLocaleDataError() {
  const self = this;
  let tmp2 = null !== Error;
  if (!tmp2) {
    if (!tmp2) {
      tmp2 = self;
    }
    tmp2.type = "MISSING_LOCALE_DATA";
    return tmp2;
  } else {
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
  }
}, Error);

export const isMissingLocaleDataError = function isMissingLocaleDataError(type) {
  return "MISSING_LOCALE_DATA" === type.type;
};
