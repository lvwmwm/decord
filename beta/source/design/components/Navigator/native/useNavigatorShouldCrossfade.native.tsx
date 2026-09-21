// Module ID: 7247
// Function ID: 7248
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 1368, 558, 568, 4481, 2]

// Module 7247 (useNavigatorShouldCrossfade)
import c from "c" /* 568 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4481 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx");

export const useNavigatorShouldCrossfade = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const context = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext);
  const prefersCrossfades = context.prefersCrossfades;
  const enabled = context.reducedMotion.enabled;
  if (cResult[0] === prefersCrossfades) {
    if (cResult[1] === enabled) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  let tmp6 = prefersCrossfades;
  if (tmpResult.isAndroid()) {
    tmp6 = enabled;
  }
  cResult[0] = prefersCrossfades;
  cResult[1] = enabled;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (() => {
  const context = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext);
  let enabled = context.prefersCrossfades;
  if (obj.isAndroid()) {
    enabled = context.reducedMotion.enabled;
  }
  return enabled;
});
