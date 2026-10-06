// Module ID: 9137
// Function ID: 9138
// Name: analytics
// Dependencies: [19, 558, 1252, 2]
// Exports: useAnalyticsContext

// Module 9137 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1252 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = () => react.useContext(AnalyticsUtils.AnalyticsContext);
