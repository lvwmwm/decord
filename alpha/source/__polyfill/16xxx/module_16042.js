// Module ID: 16042
// Function ID: 16043
// Dependencies: [1160]
// Exports: isMissingLocaleDataError

// Module 16042
import module_1160 from "module_1160" /* 1160 */;

module_1160.__extends(function MissingLocaleDataError() {
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
