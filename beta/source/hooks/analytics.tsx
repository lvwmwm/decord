// Module ID: 9687
// Function ID: 9688
// Name: analytics
// Dependencies: [19, 558, 1245, 2]
// Exports: useAnalyticsContext

// Module 9687 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1245 */;
import noop from "module_19" /* 19 */;

require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = () => noop.useContext(AnalyticsUtils.AnalyticsContext);
