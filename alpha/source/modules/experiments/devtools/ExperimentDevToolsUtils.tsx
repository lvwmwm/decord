// Module ID: 8486
// Function ID: 8487
// Name: ExperimentDevToolsUtils
// Dependencies: [8487, 5196, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8486 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5196 */;
import experiment2 from "experiment" /* 8487 */;
import size from "module_2" /* 2 */;

const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: experiment2.Variation_Type.OVERRIDE };
const result = size.fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  let variants;
  if (experiment.system !== ExperimentManager.ExperimentSystem.APEX) {
    variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};
