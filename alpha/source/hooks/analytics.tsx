// Module ID: 11236
// Function ID: 11237
// Name: analytics
// Dependencies: [19, 1252, 2]
// Exports: useAnalyticsContext

// Module 11236 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1252 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/analytics.tsx");

export function useAnalyticsContext() {
  return react.useContext(AnalyticsUtils.AnalyticsContext);
}
