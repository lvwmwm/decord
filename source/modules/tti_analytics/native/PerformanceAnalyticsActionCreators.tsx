// Module ID: 7174
// Function ID: 7175
// Name: ttiRecorded
// Dependencies: [709, 2]
// Exports: ttiRecorded

// Module 7174 (ttiRecorded)
const result = require("set").fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(closure_5) {
  let obj = importDefault(709);
  obj = { type: "TTI_RECORDED", tti: closure_5 };
  obj.dispatch(obj);
};
