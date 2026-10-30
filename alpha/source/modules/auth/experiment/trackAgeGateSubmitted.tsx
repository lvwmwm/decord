// Module ID: 17946
// Function ID: 17947
// Name: trackAgeGateSubmitted
// Dependencies: [1072, 1253, 2044, 17947, 2]
// Exports: default

// Module 17946 (trackAgeGateSubmitted)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import _modDef2044 from "module_2044" /* 2044 */;
import size from "module_2" /* 2 */;

let tmp;
const formatDateForAPIDefault = tmp(17947);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(date, section) {
  const track = AnalyticsUtilsDefault.track;
  const AGE_GATE_SUBMITTED = AnalyticEvents.AGE_GATE_SUBMITTED;
  AnalyticsUtilsDefault;
  let tmp4 = null;
  const obj = _modDef2044();
  if (obj.diff(date, "years") < 18) {
    tmp4 = formatDateForAPIDefault(date);
  }
  const obj2 = { dob: tmp4, dob_day: date.date(), dob_month: date.month() + 1, dob_year: date.year(), source: { section } };
  track(AGE_GATE_SUBMITTED, obj2);
};
