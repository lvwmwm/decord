// Module ID: 6805
// Function ID: 6806
// Name: GiftCardsExperiment
// Dependencies: [1435, 2]
// Exports: useGiftCardsExperimentConfig

// Module 6805 (GiftCardsExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-02-gift-cards", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/billing/experiments/GiftCardsExperiment.tsx");

export default apexExperiment;
export const useGiftCardsExperimentConfig = function useGiftCardsExperimentConfig(location) {
  const obj = { enabled: apexExperiment.useConfig(location).enabled };
  return obj;
};
