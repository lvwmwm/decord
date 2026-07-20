// Module ID: 6906
// Function ID: 55011
// Name: ttiRecorded
// Dependencies: []
// Exports: ttiRecorded

// Module 6906 (ttiRecorded)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(diff) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "TTI_RECORDED", tti: diff };
  obj.dispatch(obj);
};
