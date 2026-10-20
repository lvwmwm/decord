// Module ID: 8435
// Function ID: 8436
// Name: ExperimentDevToolsUtils
// Dependencies: [8436, 5156, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8435 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5156 */;
import experiment2 from "experiment" /* 8436 */;
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
