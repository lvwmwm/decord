// Module ID: 8139
// Function ID: 8140
// Name: ExperimentDevToolsUtils
// Dependencies: [8140, 5021, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8139 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5021 */;
import experiment2 from "experiment" /* 8140 */;
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
