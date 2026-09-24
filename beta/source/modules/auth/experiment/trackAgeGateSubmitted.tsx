// Module ID: 16303
// Function ID: 16304
// Name: trackAgeGateSubmitted
// Dependencies: [1078, 1245, 4384, 2]
// Exports: default

// Module 16303 (trackAgeGateSubmitted)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import _modDef4384 from "module_4384" /* 4384 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  const obj = AnalyticsUtilsDefault;
  let formatResult = null;
  if (obj2.diff(format, "years") < 18) {
    formatResult = format.format("YYYY-MM-DD");
  }
  obj2 = _modDef4384();
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, { dob: formatResult, dob_day: format.date(), dob_month: format.month() + 1, dob_year: format.year(), source: { section } });
};
