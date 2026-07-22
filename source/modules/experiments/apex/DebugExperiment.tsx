// Module ID: 12502
// Function ID: 95818
// Name: apexExperiment
// Dependencies: []
// Exports: useDebugExperiment

// Module 12502 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: {}, variations: { [1]: {}, [2]: {} } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/experiments/apex/DebugExperiment.tsx");

export default apexExperiment;
export const DebugExperiment = apexExperiment;
export const useDebugExperiment = function useDebugExperiment() {
  return apexExperiment.useConfig({ location: "debug_experiment" });
};
