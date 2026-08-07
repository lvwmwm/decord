// Module ID: 8145
// Function ID: 8146
// Name: getExperimentVariantsForDevTools
// Dependencies: [8146, 4224, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8145 (getExperimentVariantsForDevTools)
const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: require("create").Variation_Type.OVERRIDE };
const result = require("set").fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== require(4224) /* trackExposureToExperiment */.ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};
