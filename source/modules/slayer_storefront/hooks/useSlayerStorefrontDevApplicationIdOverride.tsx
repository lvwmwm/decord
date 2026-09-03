// Module ID: 10696
// Function ID: 10697
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [10697, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 10696 (useSlayerStorefrontDevApplicationIdOverride)
import set from "set" /* 2 */;
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 10697 */;

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = set.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = callback((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
};
