// Module ID: 7606
// Function ID: 7607
// Name: ttiRecorded
// Dependencies: [706, 2]
// Exports: ttiRecorded

// Module 7606 (ttiRecorded)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(closure_5) {
  let obj = dispatcherDefault;
  obj = { type: "TTI_RECORDED", tti: closure_5 };
  obj.dispatch(obj);
};
