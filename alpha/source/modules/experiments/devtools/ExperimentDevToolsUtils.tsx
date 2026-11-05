// Module ID: 8733
// Function ID: 8734
// Name: ExperimentDevToolsUtils
// Dependencies: [8734, 5369, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8733 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5369 */;
import experiment2 from "experiment" /* 8734 */;
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
