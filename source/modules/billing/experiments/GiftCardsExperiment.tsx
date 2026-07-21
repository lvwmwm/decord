// Module ID: 5796
// Function ID: 49548
// Name: apexExperiment
// Dependencies: []
// Exports: useGiftCardsExperimentConfig

// Module 5796 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: true, 0: true, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/billing/experiments/GiftCardsExperiment.tsx");

export default apexExperiment;
export const useGiftCardsExperimentConfig = function useGiftCardsExperimentConfig(location) {
  return { enabled: apexExperiment.useConfig(location).enabled };
};
