// Module ID: 8732
// Function ID: 69095
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [8733, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 8732 (useSlayerStorefrontDevApplicationIdOverride)
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
