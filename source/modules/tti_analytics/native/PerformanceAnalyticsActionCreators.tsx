// Module ID: 7675
// Function ID: 7676
// Name: ttiRecorded
// Dependencies: [573, 2]
// Exports: ttiRecorded

// Module 7675 (ttiRecorded)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;

const result = set.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(closure_5) {
  let obj = dispatcherDefault;
  obj = { type: "TTI_RECORDED", tti: closure_5 };
  obj.dispatch(obj);
};
