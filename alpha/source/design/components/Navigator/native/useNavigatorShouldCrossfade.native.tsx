// Module ID: 6680
// Function ID: 6681
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 1381, 558, 576, 4794, 2]

// Module 6680 (useNavigatorShouldCrossfade)
import react2 from "react" /* 576 */;
import react3 from "react" /* 4794 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const PlatformUtils = tmp(1381);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigatorShouldCrossfade() {
  const obj = react2;
  const cResult = obj.c(3);
  const context = react.useContext(react3.AccessibilityPreferencesContext);
  const prefersCrossfades = context.prefersCrossfades;
  const enabled = context.reducedMotion.enabled;
  if (cResult[0] === prefersCrossfades) {
    let tmp5;
    if (cResult[1] === enabled) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  let tmp6 = prefersCrossfades;
  const tmpResult = PlatformUtils;
  if (tmpResult.isAndroid()) {
    tmp6 = enabled;
  }
  cResult[0] = prefersCrossfades;
  cResult[1] = enabled;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function useNavigatorShouldCrossfade() {
  const context = react.useContext(react3.AccessibilityPreferencesContext);
  let prefersCrossfades = context.prefersCrossfades;
  const enabled = context.reducedMotion.enabled;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    prefersCrossfades = enabled;
  }
  return prefersCrossfades;
});
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = tmp2;
