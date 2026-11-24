// Module ID: 7230
// Function ID: 7231
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 1378, 4931, 2]
// Exports: useNavigatorShouldCrossfade

// Module 7230 (useNavigatorShouldCrossfade)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import react2 from "react" /* 4931 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export function useNavigatorShouldCrossfade() {
  const context = react.useContext(react2.AccessibilityPreferencesContext);
  let prefersCrossfades = context.prefersCrossfades;
  const enabled = context.reducedMotion.enabled;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    prefersCrossfades = enabled;
  }
  return prefersCrossfades;
}
