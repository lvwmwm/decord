// Module ID: 14223
// Function ID: 14224
// Name: SafetyWarningAgeUtils
// Dependencies: [2167, 1112, 2]
// Exports: formatSafetyWarningAge, getDaysAgo

// Module 14223 (SafetyWarningAgeUtils)
import intl3 from "intl" /* 1112 */;
import _modDef2167 from "module_2167" /* 2167 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/SafetyWarningAgeUtils.tsx");

export function getDaysAgo(parsed) {
  const diff = _modDef2167().diff;
  _modDef2167();
  const obj = _modDef2167;
  return diff(obj.unix(parsed), "days");
}
export function formatSafetyWarningAge(daysAgo, isSafetyWarningAgeTextEnabled) {
  const tmp = isSafetyWarningAgeTextEnabled;
  if (tmp) {
    let stringResult;
    if (daysAgo > 30) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t["8qYr4l"]);
    }
    return stringResult;
  }
  const intl = intl3.intl;
  const obj = { daysAgo };
  stringResult = intl.formatToPlainString(intl3.t.eevFb6, obj);
}
