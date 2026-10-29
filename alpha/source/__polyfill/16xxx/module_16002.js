// Module ID: 16002
// Function ID: 16003
// Dependencies: [1171]
// Exports: isMissingLocaleDataError

// Module 16002
import module_1171 from "module_1171" /* 1171 */;

module_1171.__extends(function MissingLocaleDataError() {
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
