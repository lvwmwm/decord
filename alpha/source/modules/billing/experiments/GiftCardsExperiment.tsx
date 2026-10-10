// Module ID: 7098
// Function ID: 7099
// Name: GiftCardsExperiment
// Dependencies: [1453, 558, 576, 2]

// Module 7098 (GiftCardsExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-02-gift-cards", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGiftCardsExperimentConfig(cResult) {
  let tmp3;
  const obj = react;
  cResult = obj.c(2);
  const config = apexExperiment.useConfig(cResult);
  if (cResult[0] !== config.enabled) {
    const obj2 = { enabled: config.enabled };
    cResult[0] = config.enabled;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useGiftCardsExperimentConfig(cResult) {
  const obj = { enabled: apexExperiment.useConfig(cResult).enabled };
  return obj;
});
const result = size.fileFinishedImporting("modules/billing/experiments/GiftCardsExperiment.tsx");

export default apexExperiment;
export const useGiftCardsExperimentConfig = tmp3;
