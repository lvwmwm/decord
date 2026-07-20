// Module ID: 7772
// Function ID: 61732
// Name: getExperimentVariantsForDevTools
// Dependencies: []
// Exports: getExperimentVariantsForDevTools

// Module 7772 (getExperimentVariantsForDevTools)
const obj = { type: require(dependencyMap[0]).Variation_Type.OVERRIDE };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== require(dependencyMap[1]).ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};
