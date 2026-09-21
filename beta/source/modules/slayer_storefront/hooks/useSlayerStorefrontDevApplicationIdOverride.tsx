// Module ID: 9073
// Function ID: 9074
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [9074, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 9073 (useSlayerStorefrontDevApplicationIdOverride)
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 9074 */;
import size from "module_2" /* 2 */;

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = closure_0((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
};
