// Module ID: 9078
// Function ID: 9079
// Name: ImprovedMobileShopLoadingExperiment
// Dependencies: [19, 1453, 558, 576, 2]
// Exports: useIsInImprovedMobileShopLoading

// Module 9078 (ImprovedMobileShopLoadingExperiment)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-improved-mobile-shop-loading", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsImprovedMobileShopLoadingEnabled(location) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).enabled;
}) : (function useIsImprovedMobileShopLoadingEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj).enabled;
});
const context = react.createContext(false);
const Provider = context.Provider;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/collectibles/experiments/ImprovedMobileShopLoadingExperiment.tsx");

export default apexExperiment;
export const useIsImprovedMobileShopLoadingEnabled = tmp3;
export const ImprovedMobileShopLoadingProvider = Provider;
export const useIsInImprovedMobileShopLoading = function useIsInImprovedMobileShopLoading() {
  return react.useContext(context);
};
