// Module ID: 5553
// Function ID: 47149
// Name: useNavigatorShouldCrossfade
// Dependencies: [31, 477, 3884, 2]
// Exports: useNavigatorShouldCrossfade

// Module 5553 (useNavigatorShouldCrossfade)
import result from "result";

const require = arg1;
const result = require("context").fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = React.useContext(require(3884) /* context */.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};
