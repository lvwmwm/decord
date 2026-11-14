// Module ID: 15609
// Function ID: 15610
// Name: SafetyWarningAgeUtils
// Dependencies: [2169, 1113, 2]
// Exports: formatSafetyWarningAge, getDaysAgo

// Module 15609 (SafetyWarningAgeUtils)
import intl3 from "intl" /* 1113 */;
import _modDef2169 from "module_2169" /* 2169 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/SafetyWarningAgeUtils.tsx");

export function getDaysAgo(parsed) {
  const diff = _modDef2169().diff;
  _modDef2169();
  const obj = _modDef2169;
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
