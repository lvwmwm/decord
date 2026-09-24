// Module ID: 11086
// Function ID: 11087
// Name: MarketingComponentHooks
// Dependencies: [4782, 558, 568, 4725, 504, 4501, 2]

// Module 11086 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import useThemeDefault from "useTheme" /* 4725 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

const themes = tmp3(4501);
require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = ReactCompilerGating.isReactCompilerEnabled() ? ((lightStaticUrl, arg1) => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp4 = useThemeDefault();
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (null == lightStaticUrl) {
    return null;
  } else {
    const tmpResult2 = tmp(4501);
  }
}) : ((lightStaticUrl, arg1) => {
  const tmp2 = useThemeDefault();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == lightStaticUrl) {
    return null;
  } else {
    const tmp3Result = themes;
  }
});
