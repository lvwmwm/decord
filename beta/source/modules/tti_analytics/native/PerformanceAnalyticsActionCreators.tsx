// Module ID: 7916
// Function ID: 7917
// Name: PerformanceAnalyticsActionCreators
// Dependencies: [577, 2]
// Exports: ttiRecorded

// Module 7916 (PerformanceAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(tti) {
  DispatcherDefault.dispatch({ type: "TTI_RECORDED", tti });
};
