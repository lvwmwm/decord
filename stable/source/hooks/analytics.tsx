// Module ID: 11297
// Function ID: 11298
// Name: analytics
// Dependencies: [19, 1256, 2]
// Exports: useAnalyticsContext

// Module 11297 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1256 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/analytics.tsx");

export function useAnalyticsContext() {
  return react.useContext(AnalyticsUtils.AnalyticsContext);
}
