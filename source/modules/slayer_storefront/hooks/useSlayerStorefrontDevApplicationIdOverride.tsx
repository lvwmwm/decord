// Module ID: 8691
// Function ID: 68877
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [8692, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 8691 (useSlayerStorefrontDevApplicationIdOverride)
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
