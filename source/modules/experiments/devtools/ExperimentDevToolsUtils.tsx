// Module ID: 7857
// Function ID: 62187
// Name: getExperimentVariantsForDevTools
// Dependencies: [7858, 4087, 2]
// Exports: getExperimentVariantsForDevTools

// Module 7857 (getExperimentVariantsForDevTools)
const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: require("_callSuper").Variation_Type.OVERRIDE };
const result = require("set").fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== require(4087) /* trackExposureToExperiment */.ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};
