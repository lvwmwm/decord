// Module ID: 8880
// Function ID: 8881
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [8881, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 8880 (useSlayerStorefrontDevApplicationIdOverride)
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 8881 */;
import size from "module_2" /* 2 */;

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = closure_0((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
}
