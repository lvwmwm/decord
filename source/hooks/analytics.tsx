// Module ID: 8731
// Function ID: 8732
// Name: useAnalyticsContext
// Dependencies: [19, 698, 2]
// Exports: useAnalyticsContext

// Module 8731 (useAnalyticsContext)
import noop from "noop";

const require = arg1;
const result = require("set").fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return React.useContext(require(698) /* expandEventProperties */.AnalyticsContext);
};
