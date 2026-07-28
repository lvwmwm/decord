// Module ID: 8664
// Function ID: 68724
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [8665, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 8664 (useSlayerStorefrontDevApplicationIdOverride)
import { useSlayerStorefrontDevOverrideStore as closure_0 } from "useSlayerStorefrontDevOverrideStore";

const result = require("set").fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  let tmp;
  const tmp2 = callback((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  if (null != tmp2) {
    tmp = tmp2;
  }
  return tmp;
};
