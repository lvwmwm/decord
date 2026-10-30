// Module ID: 10028
// Function ID: 10029
// Name: analytics
// Dependencies: [19, 1253, 2]
// Exports: useAnalyticsContext

// Module 10028 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1253 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/analytics.tsx");

export function useAnalyticsContext() {
  return react.useContext(AnalyticsUtils.AnalyticsContext);
}
