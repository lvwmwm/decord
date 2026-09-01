// Module ID: 10471
// Function ID: 10472
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [10472, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 10471 (useSlayerStorefrontDevApplicationIdOverride)
import set from "set" /* 2 */;
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 10472 */;

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = set.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = callback((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
};
