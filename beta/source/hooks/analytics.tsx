// Module ID: 10741
// Function ID: 10742
// Name: analytics
// Dependencies: [19, 1255, 2]
// Exports: useAnalyticsContext

// Module 10741 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1255 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/analytics.tsx");

export function useAnalyticsContext() {
  return react.useContext(AnalyticsUtils.AnalyticsContext);
}
