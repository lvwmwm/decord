// Module ID: 16361
// Function ID: 16362
// Name: trackAgeGateSubmitted
// Dependencies: [1085, 1265, 4702, 16362, 2]
// Exports: default

// Module 16361 (trackAgeGateSubmitted)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import _modDef4702 from "module_4702" /* 4702 */;
import size from "module_2" /* 2 */;

let tmp;
const formatDateForAPIDefault = tmp(16362);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(date, section) {
  const track = AnalyticsUtilsDefault.track;
  const AGE_GATE_SUBMITTED = AnalyticEvents.AGE_GATE_SUBMITTED;
  AnalyticsUtilsDefault;
  let tmp4 = null;
  const obj = _modDef4702();
  if (obj.diff(date, "years") < 18) {
    tmp4 = formatDateForAPIDefault(date);
  }
  const obj2 = { dob: tmp4, dob_day: date.date(), dob_month: date.month() + 1, dob_year: date.year(), source: { section } };
  track(AGE_GATE_SUBMITTED, obj2);
};
