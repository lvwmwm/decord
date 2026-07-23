// Module ID: 6916
// Function ID: 55078
// Name: ttiRecorded
// Dependencies: [686, 2]
// Exports: ttiRecorded

// Module 6916 (ttiRecorded)
const result = require("set").fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(diff) {
  let obj = importDefault(686);
  obj = { type: "TTI_RECORDED", tti: diff };
  obj.dispatch(obj);
};
