// Module ID: 12488
// Function ID: 12489
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: useGiftCardsExperimentConfig

// Module 12488 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-gift-cards", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/billing/experiments/GiftCardsExperiment.tsx");

export default apexExperiment;
export const useGiftCardsExperimentConfig = function useGiftCardsExperimentConfig(location) {
  return { enabled: apexExperiment.useConfig(location).enabled };
};
