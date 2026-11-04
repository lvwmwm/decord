// Module ID: 8728
// Function ID: 8729
// Name: ExperimentDevToolsUtils
// Dependencies: [8729, 5367, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8728 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5367 */;
import experiment2 from "experiment" /* 8729 */;
import size from "module_2" /* 2 */;

const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: experiment2.Variation_Type.OVERRIDE };
const result = size.fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export function getExperimentVariantsForDevTools(experiment) {
  let variants;
  if (experiment.system !== ExperimentManager.ExperimentSystem.APEX) {
    variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
}
