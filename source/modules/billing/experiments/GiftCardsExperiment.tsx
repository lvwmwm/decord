// Module ID: 12422
// Function ID: 96403
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useGiftCardsExperimentConfig

// Module 12422 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-gift-cards", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/billing/experiments/GiftCardsExperiment.tsx");

export default apexExperiment;
export const useGiftCardsExperimentConfig = function useGiftCardsExperimentConfig(location) {
  return { enabled: apexExperiment.useConfig(location).enabled };
};
