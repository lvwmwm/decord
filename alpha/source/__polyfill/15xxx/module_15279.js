// Module ID: 15279
// Function ID: 15280
// Dependencies: [1174]
// Exports: isMissingLocaleDataError

// Module 15279
import module_1174 from "module_1174" /* 1174 */;

module_1174.__extends(function MissingLocaleDataError() {
  const self = this;
  let applyResult = null !== Error;
  const obj = Error;
  if (applyResult) {
    applyResult = obj(...arguments);
  }
  if (!applyResult) {
    applyResult = self;
  }
  applyResult.type = "MISSING_LOCALE_DATA";
  return applyResult;
}, Error);

export const isMissingLocaleDataError = function isMissingLocaleDataError(type) {
  return "MISSING_LOCALE_DATA" === type.type;
};
