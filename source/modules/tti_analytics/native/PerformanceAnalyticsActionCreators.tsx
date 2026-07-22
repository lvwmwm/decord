// Module ID: 6911
// Function ID: 55044
// Name: ttiRecorded
// Dependencies: []
// Exports: ttiRecorded

// Module 6911 (ttiRecorded)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(diff) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "TTI_RECORDED", tti: diff };
  obj.dispatch(obj);
};
