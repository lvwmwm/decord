// Module ID: 10001
// Function ID: 10002
// Name: analytics
// Dependencies: [19, 558, 1264, 2]
// Exports: useAnalyticsContext

// Module 10001 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1264 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("hooks/analytics.tsx");

export function useAnalyticsContext() {
  return react.useContext(AnalyticsUtils.AnalyticsContext);
}
