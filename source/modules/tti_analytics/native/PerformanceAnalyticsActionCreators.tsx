// Module ID: 7427
// Function ID: 7428
// Name: ttiRecorded
// Dependencies: [706, 2]
// Exports: ttiRecorded

// Module 7427 (ttiRecorded)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(closure_5) {
  let obj = dispatcherDefault;
  obj = { type: "TTI_RECORDED", tti: closure_5 };
  obj.dispatch(obj);
};
