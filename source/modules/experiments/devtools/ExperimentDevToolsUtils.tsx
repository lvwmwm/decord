// Module ID: 7874
// Function ID: 62124
// Name: getExperimentVariantsForDevTools
// Dependencies: [7875, 4052, 2]
// Exports: getExperimentVariantsForDevTools

// Module 7874 (getExperimentVariantsForDevTools)
const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: require("_callSuper").Variation_Type.OVERRIDE };
const result = require("set").fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== require(4052) /* trackExposureToExperiment */.ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};
