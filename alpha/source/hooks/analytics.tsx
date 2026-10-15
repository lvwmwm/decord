// Module ID: 9758
// Function ID: 9759
// Name: analytics
// Dependencies: [19, 558, 1265, 2]
// Exports: useAnalyticsContext

// Module 9758 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1265 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return react.useContext(AnalyticsUtils.AnalyticsContext);
};
