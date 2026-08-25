// Module ID: 7279
// Function ID: 7280
// Name: ttiRecorded
// Dependencies: [709, 2]
// Exports: ttiRecorded

// Module 7279 (ttiRecorded)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(closure_5) {
  let obj = dispatcherDefault;
  obj = { type: "TTI_RECORDED", tti: closure_5 };
  obj.dispatch(obj);
};
