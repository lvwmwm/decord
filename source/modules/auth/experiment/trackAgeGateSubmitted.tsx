// Module ID: 14744
// Function ID: 112488
// Name: trackAgeGateSubmitted
// Dependencies: [653, 675, 3712, 2]
// Exports: default

// Module 14744 (trackAgeGateSubmitted)
import { AnalyticEvents } from "ME";

const result = require("t").fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  let obj = importDefault(675);
  obj = {};
  let formatResult = null;
  if (obj3.diff(format, "years") < 18) {
    formatResult = format.format("YYYY-MM-DD");
  }
  obj.dob = formatResult;
  obj.dob_day = format.date();
  obj.dob_month = format.month() + 1;
  obj.dob_year = format.year();
  obj = { section };
  obj.source = obj;
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, obj);
};
