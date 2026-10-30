// Module ID: 9547
// Function ID: 9548
// Name: ImprovedMobileShopLoadingExperiment
// Dependencies: [19, 1448, 2]
// Exports: useIsImprovedMobileShopLoadingEnabled, useIsInImprovedMobileShopLoading

// Module 9547 (ImprovedMobileShopLoadingExperiment)
import react from "react" /* 19 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-improved-mobile-shop-loading", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const context = react.createContext(false);
const Provider = context.Provider;
const result = size.fileFinishedImporting("modules/collectibles/experiments/ImprovedMobileShopLoadingExperiment.tsx");

export default apexExperiment;
export function useIsImprovedMobileShopLoadingEnabled(collectibles_shop_v2) {
  const obj = { location: collectibles_shop_v2 };
  return apexExperiment.useConfig(obj).enabled;
}
export const ImprovedMobileShopLoadingProvider = Provider;
export function useIsInImprovedMobileShopLoading() {
  return react.useContext(context);
}
