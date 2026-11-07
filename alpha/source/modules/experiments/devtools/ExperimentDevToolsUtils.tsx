// Module ID: 8658
// Function ID: 8659
// Name: ExperimentDevToolsUtils
// Dependencies: [8659, 5359, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8658 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5359 */;
import experiment2 from "experiment" /* 8659 */;
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
