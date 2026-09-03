// Module ID: 9187
// Function ID: 9188
// Name: useAnalyticsContext
// Dependencies: [19, 695, 2]
// Exports: useAnalyticsContext

// Module 9187 (useAnalyticsContext)
import expandEventProperties from "expandEventProperties" /* 695 */;
import closure_2 from "noop" /* 19 */;

require = arg1;
const result = require("set").fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return React.useContext(expandEventProperties.AnalyticsContext);
};
