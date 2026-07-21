// Module ID: 7776
// Function ID: 61744
// Name: getExperimentVariantsForDevTools
// Dependencies: [1929379870, 1962934302]
// Exports: getExperimentVariantsForDevTools

// Module 7776 (getExperimentVariantsForDevTools)
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
