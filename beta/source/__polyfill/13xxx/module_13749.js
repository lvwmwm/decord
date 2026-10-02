// Module ID: 13749
// Function ID: 13750
// Dependencies: [1173]
// Exports: isMissingLocaleDataError

// Module 13749
import module_1173 from "module_1173" /* 1173 */;

module_1173.__extends(function MissingLocaleDataError() {
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
