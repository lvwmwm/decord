// Module ID: 17476
// Function ID: 17477
// Name: trackAgeGateSubmitted
// Dependencies: [1071, 1255, 2168, 17477, 2]
// Exports: default

// Module 17476 (trackAgeGateSubmitted)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import _modDef2168 from "module_2168" /* 2168 */;
import size from "module_2" /* 2 */;

let tmp;
const formatDateForAPIDefault = tmp(17477);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(date, section) {
  const track = AnalyticsUtilsDefault.track;
  const AGE_GATE_SUBMITTED = AnalyticEvents.AGE_GATE_SUBMITTED;
  AnalyticsUtilsDefault;
  let tmp4 = null;
  const obj = _modDef2168();
  if (obj.diff(date, "years") < 18) {
    tmp4 = formatDateForAPIDefault(date);
  }
  const obj2 = { dob: tmp4, dob_day: date.date(), dob_month: date.month() + 1, dob_year: date.year(), source: { section } };
  track(AGE_GATE_SUBMITTED, obj2);
};
