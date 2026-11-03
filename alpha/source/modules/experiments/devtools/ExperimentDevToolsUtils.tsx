// Module ID: 8711
// Function ID: 8712
// Name: ExperimentDevToolsUtils
// Dependencies: [8712, 5366, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8711 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5366 */;
import experiment2 from "experiment" /* 8712 */;
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
