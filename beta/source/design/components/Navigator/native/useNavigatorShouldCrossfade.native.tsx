// Module ID: 7279
// Function ID: 7280
// Name: useNavigatorShouldCrossfade
// Dependencies: [19, 1368, 558, 568, 4513, 2]

// Module 7279 (useNavigatorShouldCrossfade)
import c from "c" /* 568 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4513 */;
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
