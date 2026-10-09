// Module ID: 8324
// Function ID: 8325
// Name: ShopThisLookMobileExperiment
// Dependencies: [1453, 558, 576, 2]

// Module 8324 (ShopThisLookMobileExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-shop-this-look-mobile", kind: "user", defaultConfig: { shopThisLookMobileEnabled: false }, variations: { 0: { shopThisLookMobileEnabled: false }, 1: { shopThisLookMobileEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsShopThisLookMobileEnabled(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).shopThisLookMobileEnabled;
}) : (function useIsShopThisLookMobileEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj).shopThisLookMobileEnabled;
});
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopThisLookMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopThisLookMobileEnabled = tmp3;
