// Module ID: 8141
// Function ID: 8142
// Name: ExperimentDevToolsUtils
// Dependencies: [8142, 4679, 2]
// Exports: getExperimentVariantsForDevTools

// Module 8141 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 4679 */;
import experiment2 from "experiment" /* 8142 */;
import size from "module_2" /* 2 */;

const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: experiment2.Variation_Type.OVERRIDE };
const result = size.fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== ExperimentManager.ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};
