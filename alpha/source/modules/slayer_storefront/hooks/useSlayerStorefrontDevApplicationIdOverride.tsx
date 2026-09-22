// Module ID: 9078
// Function ID: 9079
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [9079, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 9078 (useSlayerStorefrontDevApplicationIdOverride)
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 9079 */;
import size from "module_2" /* 2 */;

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = closure_0((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
};
