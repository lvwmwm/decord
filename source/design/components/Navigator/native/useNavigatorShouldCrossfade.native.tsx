// Module ID: 6018
// Function ID: 6019
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 1234, 1355, 2]
// Exports: useNavigatorShouldCrossfade

// Module 6018 (useNavigatorShouldCrossfade)
import context2 from "context" /* 1355 */;
import closure_2 from "noop" /* 19 */;

require = arg1;
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = React.useContext(context2.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};
