// Module ID: 7088
// Function ID: 7089
// Name: PerformanceAnalyticsActionCreators
// Dependencies: [573, 2]
// Exports: ttiRecorded

// Module 7088 (PerformanceAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(tti) {
  DispatcherDefault.dispatch({ type: "TTI_RECORDED", tti });
};
