// Module ID: 8519
// Function ID: 8520
// Name: ExperimentDevToolsUtils
// Dependencies: [8520, 5227, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8519 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5227 */;
import experiment2 from "experiment" /* 8520 */;
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
