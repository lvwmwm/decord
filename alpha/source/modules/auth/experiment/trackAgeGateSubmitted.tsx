// Module ID: 16178
// Function ID: 16179
// Name: trackAgeGateSubmitted
// Dependencies: [1085, 1264, 4659, 16179, 2]
// Exports: default

// Module 16178 (trackAgeGateSubmitted)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import _modDef4659 from "module_4659" /* 4659 */;
import size from "module_2" /* 2 */;

let tmp;
const formatDateForAPIDefault = tmp(16179);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(date, section) {
  const track = AnalyticsUtilsDefault.track;
  const AGE_GATE_SUBMITTED = AnalyticEvents.AGE_GATE_SUBMITTED;
  AnalyticsUtilsDefault;
  let tmp4 = null;
  const obj = _modDef4659();
  if (obj.diff(date, "years") < 18) {
    tmp4 = formatDateForAPIDefault(date);
  }
  const obj2 = { dob: tmp4, dob_day: date.date(), dob_month: date.month() + 1, dob_year: date.year(), source: { section } };
  track(AGE_GATE_SUBMITTED, obj2);
};
