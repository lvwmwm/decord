// Module ID: 15293
// Function ID: 15294
// Name: SafetyWarningAgeUtils
// Dependencies: [2171, 1113, 2]
// Exports: formatSafetyWarningAge, getDaysAgo

// Module 15293 (SafetyWarningAgeUtils)
import intl3 from "intl" /* 1113 */;
import _modDef2171 from "module_2171" /* 2171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/SafetyWarningAgeUtils.tsx");

export function getDaysAgo(parsed) {
  const diff = _modDef2171().diff;
  _modDef2171();
  const obj = _modDef2171;
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
