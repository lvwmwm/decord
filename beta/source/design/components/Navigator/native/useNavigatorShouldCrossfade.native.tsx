// Module ID: 7278
// Function ID: 7279
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 1364, 4508, 2]
// Exports: useNavigatorShouldCrossfade

// Module 7278 (useNavigatorShouldCrossfade)
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4508 */;
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
