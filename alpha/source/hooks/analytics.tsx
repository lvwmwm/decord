// Module ID: 9612
// Function ID: 9613
// Name: analytics
// Dependencies: [19, 1255, 2]
// Exports: useAnalyticsContext

// Module 9612 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1255 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/analytics.tsx");

export function useAnalyticsContext() {
  return react.useContext(AnalyticsUtils.AnalyticsContext);
}
