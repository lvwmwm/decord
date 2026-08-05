// Module ID: 5651
// Function ID: 5652
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 500, 3974, 2]
// Exports: useNavigatorShouldCrossfade

// Module 5651 (useNavigatorShouldCrossfade)
import noop from "noop";

const require = arg1;
const result = require("context").fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = React.useContext(require(3974) /* context */.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};
