// Module ID: 10432
// Function ID: 10433
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [10433, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 10432 (useSlayerStorefrontDevApplicationIdOverride)
import set from "set" /* 2 */;
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 10433 */;

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = set.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = callback((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
};
