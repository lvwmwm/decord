// Module ID: 15691
// Function ID: 15692
// Dependencies: [1158]
// Exports: isMissingLocaleDataError

// Module 15691
import module_1158 from "module_1158" /* 1158 */;

module_1158.__extends(function MissingLocaleDataError() {
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
