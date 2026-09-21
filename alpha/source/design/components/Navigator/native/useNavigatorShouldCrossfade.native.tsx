// Module ID: 7246
// Function ID: 7247
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 1364, 4476, 2]
// Exports: useNavigatorShouldCrossfade

// Module 7246 (useNavigatorShouldCrossfade)
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4476 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
};
