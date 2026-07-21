// Module ID: 8683
// Function ID: 68825
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: []
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 8683 (useSlayerStorefrontDevApplicationIdOverride)
let closure_0 = require(dependencyMap[0]).useSlayerStorefrontDevOverrideStore;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  let tmp;
  const tmp2 = callback((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  if (null != tmp2) {
    tmp = tmp2;
  }
  return tmp;
};
