// Module ID: 8875
// Function ID: 8876
// Name: analytics
// Dependencies: [19, 558, 1253, 2]
// Exports: useAnalyticsContext

// Module 8875 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1253 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = () => react.useContext(AnalyticsUtils.AnalyticsContext);
