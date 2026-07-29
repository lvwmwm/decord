// Module ID: 5571
// Function ID: 5572
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 500, 3908, 2]
// Exports: useNavigatorShouldCrossfade

// Module 5571 (useNavigatorShouldCrossfade)
import noop from "noop";

const require = arg1;
const result = require("context").fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = React.useContext(require(3908) /* context */.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};
