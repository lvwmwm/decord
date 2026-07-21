// Module ID: 9680
// Function ID: 75341
// Name: useThemeAndReducedMotionAwareAssetUrl
// Dependencies: []
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 9680 (useThemeAndReducedMotionAwareAssetUrl)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp = importDefault(dependencyMap[1])();
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const obj2 = arg1(dependencyMap[3]);
  }
};
