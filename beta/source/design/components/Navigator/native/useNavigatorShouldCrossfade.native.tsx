// Module ID: 6422
// Function ID: 6423
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 1364, 4550, 2]
// Exports: useNavigatorShouldCrossfade

// Module 6422 (useNavigatorShouldCrossfade)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import react2 from "react" /* 4550 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = function useNavigatorShouldCrossfade() {
  const context = react.useContext(react2.AccessibilityPreferencesContext);
  let prefersCrossfades = context.prefersCrossfades;
  const enabled = context.reducedMotion.enabled;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    prefersCrossfades = enabled;
  }
  return prefersCrossfades;
};
