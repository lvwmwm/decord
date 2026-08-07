// Module ID: 15024
// Function ID: 15025
// Name: trackAgeGateSubmitted
// Dependencies: [676, 698, 3883, 2]
// Exports: default

// Module 15024 (trackAgeGateSubmitted)
import { AnalyticEvents } from "ME";

const result = require("t").fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  let obj = importDefault(698);
  let formatResult = null;
  if (obj2.diff(format, "years") < 18) {
    formatResult = format.format("YYYY-MM-DD");
  }
  obj = { dob: formatResult, dob_day: format.date(), dob_month: format.month() + 1, dob_year: format.year(), source: obj };
  obj = { section };
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, obj);
};
