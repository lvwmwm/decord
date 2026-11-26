// Module ID: 5770
// Function ID: 5771
// Name: ExperimentDevToolsUtils
// Dependencies: [5771, 5768, 2]
// Exports: getExperimentVariantsForDevTools

// Module 5770 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5768 */;
import experiment2 from "experiment" /* 5771 */;
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
