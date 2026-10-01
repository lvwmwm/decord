// Module ID: 8895
// Function ID: 8896
// Name: analytics
// Dependencies: [19, 1241, 2]
// Exports: useAnalyticsContext

// Module 8895 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1241 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return react.useContext(AnalyticsUtils.AnalyticsContext);
};
