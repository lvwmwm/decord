// Module ID: 14020
// Function ID: 14021
// Dependencies: [1172]
// Exports: isMissingLocaleDataError

// Module 14020
import module_1172 from "module_1172" /* 1172 */;

module_1172.__extends(function MissingLocaleDataError() {
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
