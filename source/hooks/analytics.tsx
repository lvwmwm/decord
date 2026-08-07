// Module ID: 8671
// Function ID: 8672
// Name: useAnalyticsContext
// Dependencies: [19, 698, 2]
// Exports: useAnalyticsContext

// Module 8671 (useAnalyticsContext)
import noop from "noop";

const require = arg1;
const result = require("set").fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return React.useContext(require(698) /* expandEventProperties */.AnalyticsContext);
};
