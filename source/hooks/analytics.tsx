// Module ID: 9130
// Function ID: 9131
// Name: useAnalyticsContext
// Dependencies: [19, 698, 2]
// Exports: useAnalyticsContext

// Module 9130 (useAnalyticsContext)
import expandEventProperties from "expandEventProperties" /* 698 */;
import closure_2 from "noop" /* 19 */;

require = arg1;
const result = require("set").fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return React.useContext(expandEventProperties.AnalyticsContext);
};
