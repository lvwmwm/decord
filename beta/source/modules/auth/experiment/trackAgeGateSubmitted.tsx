// Module ID: 15583
// Function ID: 15584
// Name: trackAgeGateSubmitted
// Dependencies: [1074, 1241, 4421, 2]
// Exports: default

// Module 15583 (trackAgeGateSubmitted)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import _modDef4421 from "module_4421" /* 4421 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  const track = AnalyticsUtilsDefault.track;
  const AGE_GATE_SUBMITTED = AnalyticEvents.AGE_GATE_SUBMITTED;
  AnalyticsUtilsDefault;
  let formatResult = null;
  const obj = _modDef4421();
  if (obj.diff(format, "years") < 18) {
    formatResult = format.format("YYYY-MM-DD");
  }
  const obj2 = { dob: formatResult, dob_day: format.date(), dob_month: format.month() + 1, dob_year: format.year(), source: { section } };
  track(AGE_GATE_SUBMITTED, obj2);
};
