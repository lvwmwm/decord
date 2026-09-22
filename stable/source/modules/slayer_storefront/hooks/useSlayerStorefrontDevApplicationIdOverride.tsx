// Module ID: 8919
// Function ID: 8920
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [8920, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 8919 (useSlayerStorefrontDevApplicationIdOverride)
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 8920 */;
import size from "module_2" /* 2 */;

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = closure_0((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
};
