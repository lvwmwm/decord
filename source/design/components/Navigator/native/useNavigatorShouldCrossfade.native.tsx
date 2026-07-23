// Module ID: 5520
// Function ID: 47019
// Name: useNavigatorShouldCrossfade
// Dependencies: [31, 477, 3849, 2]
// Exports: useNavigatorShouldCrossfade

// Module 5520 (useNavigatorShouldCrossfade)
import result from "result";

const require = arg1;
const result = require("context").fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = React.useContext(require(3849) /* context */.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};
