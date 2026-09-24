// Module ID: 7948
// Function ID: 7949
// Name: PerformanceAnalyticsActionCreators
// Dependencies: [577, 2]
// Exports: ttiRecorded

// Module 7948 (PerformanceAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(tti) {
  DispatcherDefault.dispatch({ type: "TTI_RECORDED", tti });
};
