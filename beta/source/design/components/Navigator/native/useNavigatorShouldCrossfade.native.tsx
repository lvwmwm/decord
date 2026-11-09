// Module ID: 7232
// Function ID: 7233
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 1377, 5154, 2]
// Exports: useNavigatorShouldCrossfade

// Module 7232 (useNavigatorShouldCrossfade)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import react2 from "react" /* 5154 */;
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
