// Module ID: 8545
// Function ID: 8546
// Name: ExperimentDevToolsUtils
// Dependencies: [8546, 5232, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8545 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5232 */;
import experiment2 from "experiment" /* 8546 */;
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
