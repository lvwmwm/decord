// Module ID: 6259
// Function ID: 6260
// Name: apexExperiment
// Dependencies: [1467, 2]
// Exports: useGiftCardsExperimentConfig

// Module 6259 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-gift-cards", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/billing/experiments/GiftCardsExperiment.tsx");

export default apexExperiment;
export const useGiftCardsExperimentConfig = function useGiftCardsExperimentConfig(location) {
  return { enabled: apexExperiment.useConfig(location).enabled };
};
