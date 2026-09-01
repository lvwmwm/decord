// Module ID: 15550
// Function ID: 15551
// Name: trackAgeGateSubmitted
// Dependencies: [676, 698, 4075, 2]
// Exports: default

// Module 15550 (trackAgeGateSubmitted)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  let obj = expandEventPropertiesDefault;
  let formatResult = null;
  if (obj2.diff(format, "years") < 18) {
    formatResult = format.format("YYYY-MM-DD");
  }
  obj = { dob: formatResult, dob_day: format.date(), dob_month: format.month() + 1, dob_year: format.year(), source: obj };
  obj = { section };
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, obj);
};
