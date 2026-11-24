// Module ID: 9000
// Function ID: 9001
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [9001, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 9000 (useSlayerStorefrontDevApplicationIdOverride)
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 9001 */;
import size from "module_2" /* 2 */;

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = closure_0((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
}
