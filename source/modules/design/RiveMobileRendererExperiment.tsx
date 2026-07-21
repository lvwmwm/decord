// Module ID: 14601
// Function ID: 110051
// Name: apexExperiment
// Dependencies: []
// Exports: useRiveRendererExperiment

// Module 14601 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: null, 1387159956: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/design/RiveMobileRendererExperiment.tsx");

export default apexExperiment;
export const useRiveRendererExperiment = function useRiveRendererExperiment(AppContainer) {
  return apexExperiment.useConfig({ location: AppContainer }).enabled;
};
