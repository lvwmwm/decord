// Module ID: 5823
// Function ID: 5824
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 500, 1356, 2]
// Exports: useNavigatorShouldCrossfade

// Module 5823 (useNavigatorShouldCrossfade)
import noop from "noop";

const require = arg1;
const result = require("context").fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = React.useContext(require(1356) /* context */.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};
