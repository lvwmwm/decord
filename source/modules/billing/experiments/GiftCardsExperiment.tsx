// Module ID: 5930
// Function ID: 5931
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: useGiftCardsExperimentConfig

// Module 5930 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-gift-cards", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/billing/experiments/GiftCardsExperiment.tsx");

export default apexExperiment;
export const useGiftCardsExperimentConfig = function useGiftCardsExperimentConfig(location) {
  return { enabled: apexExperiment.useConfig(location).enabled };
};
