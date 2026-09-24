// Module ID: 9103
// Function ID: 9104
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [9104, 558, 568, 2]

// Module 9103 (useSlayerStorefrontDevApplicationIdOverride)
import c from "c" /* 568 */;
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 9104 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(overrideApplicationId) {
      return overrideApplicationId.overrideApplicationId;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp3 = closure_2(first);
  return tmp3;
}) : (() => {
  const tmp = closure_2((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
});
