// Module ID: 7804
// Function ID: 7805
// Name: PerformanceAnalyticsActionCreators
// Dependencies: [584, 2]
// Exports: ttiRecorded

// Module 7804 (PerformanceAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export function ttiRecorded(tti) {
  const obj = DispatcherDefault;
  const obj2 = { type: "TTI_RECORDED", tti };
  obj.dispatch(obj2);
}
