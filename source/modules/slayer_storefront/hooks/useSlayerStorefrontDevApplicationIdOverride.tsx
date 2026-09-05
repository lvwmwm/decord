// Module ID: 8792
// Function ID: 8793
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [8793, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 8792 (useSlayerStorefrontDevApplicationIdOverride)
import set from "set" /* 2 */;
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 8793 */;

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = set.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = callback((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
};
