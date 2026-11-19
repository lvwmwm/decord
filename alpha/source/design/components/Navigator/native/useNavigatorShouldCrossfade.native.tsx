// Module ID: 6974
// Function ID: 6975
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 1380, 4806, 2]
// Exports: useNavigatorShouldCrossfade

// Module 6974 (useNavigatorShouldCrossfade)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import react2 from "react" /* 4806 */;
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
