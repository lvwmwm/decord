// Module ID: 7816
// Function ID: 7817
// Name: PerformanceAnalyticsActionCreators
// Dependencies: [572, 2]
// Exports: ttiRecorded

// Module 7816 (PerformanceAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export function ttiRecorded(tti) {
  const obj = DispatcherDefault;
  const obj2 = { type: "TTI_RECORDED", tti };
  obj.dispatch(obj2);
}
