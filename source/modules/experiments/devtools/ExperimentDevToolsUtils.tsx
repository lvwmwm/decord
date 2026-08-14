// Module ID: 8273
// Function ID: 8274
// Name: getExperimentVariantsForDevTools
// Dependencies: [8274, 4264, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8273 (getExperimentVariantsForDevTools)
const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: require("create").Variation_Type.OVERRIDE };
const result = require("set").fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== require(4264) /* trackExposureToExperiment */.ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};
