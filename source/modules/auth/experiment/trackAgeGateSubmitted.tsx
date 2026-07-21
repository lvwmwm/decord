// Module ID: 14621
// Function ID: 110281
// Name: trackAgeGateSubmitted
// Dependencies: []
// Exports: default

// Module 14621 (trackAgeGateSubmitted)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  let obj = importDefault(dependencyMap[1]);
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
