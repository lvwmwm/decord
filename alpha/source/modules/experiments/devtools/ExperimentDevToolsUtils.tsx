// Module ID: 8369
// Function ID: 8370
// Name: ExperimentDevToolsUtils
// Dependencies: [8370, 5080, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8369 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5080 */;
import experiment2 from "experiment" /* 8370 */;
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
