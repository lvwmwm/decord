// Module ID: 8248
// Function ID: 8249
// Name: getExperimentVariantsForDevTools
// Dependencies: [8249, 4266, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8248 (getExperimentVariantsForDevTools)
const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: require("create").Variation_Type.OVERRIDE };
const result = require("set").fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== require(4266) /* trackExposureToExperiment */.ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};
