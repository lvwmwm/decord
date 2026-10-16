// Module ID: 9774
// Function ID: 9775
// Name: analytics
// Dependencies: [19, 558, 1267, 2]
// Exports: useAnalyticsContext

// Module 9774 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1267 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return react.useContext(AnalyticsUtils.AnalyticsContext);
};
