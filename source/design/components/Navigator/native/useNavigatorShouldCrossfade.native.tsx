// Module ID: 6344
// Function ID: 6345
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 500, 1356, 2]
// Exports: useNavigatorShouldCrossfade

// Module 6344 (useNavigatorShouldCrossfade)
import context2 from "context" /* 1356 */;
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
