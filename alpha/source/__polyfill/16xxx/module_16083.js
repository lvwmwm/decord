// Module ID: 16083
// Function ID: 16084
// Dependencies: [1159]
// Exports: isMissingLocaleDataError

// Module 16083
import module_1159 from "module_1159" /* 1159 */;

module_1159.__extends(function MissingLocaleDataError() {
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

export function isMissingLocaleDataError(type) {
  return "MISSING_LOCALE_DATA" === type.type;
}
