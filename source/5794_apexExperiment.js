// Module ID: 5794
// Function ID: 49505
// Name: apexExperiment
// Dependencies: []
// Exports: useGiftCardsExperimentConfig

// Module 5794 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: null, -1845285747: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/billing/experiments/GiftCardsExperiment.tsx");

export default apexExperiment;
export const useGiftCardsExperimentConfig = function useGiftCardsExperimentConfig(location) {
  return { enabled: apexExperiment.useConfig(location).enabled };
};
