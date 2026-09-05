// Module ID: 7001
// Function ID: 7002
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 1115, 4279, 2]
// Exports: useNavigatorShouldCrossfade

// Module 7001 (useNavigatorShouldCrossfade)
import context2 from "context" /* 4279 */;
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
