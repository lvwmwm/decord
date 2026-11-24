// Module ID: 5644
// Function ID: 5645
// Name: ExperimentDevToolsUtils
// Dependencies: [5645, 5642, 2]
// Exports: getExperimentVariantsForDevTools

// Module 5644 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5642 */;
import experiment2 from "experiment" /* 5645 */;
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
