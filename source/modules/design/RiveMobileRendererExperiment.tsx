// Module ID: 14609
// Function ID: 110094
// Name: apexExperiment
// Dependencies: []
// Exports: useRiveRendererExperiment

// Module 14609 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/design/RiveMobileRendererExperiment.tsx");

export default apexExperiment;
export const useRiveRendererExperiment = function useRiveRendererExperiment(AppContainer) {
  return apexExperiment.useConfig({ location: AppContainer }).enabled;
};
