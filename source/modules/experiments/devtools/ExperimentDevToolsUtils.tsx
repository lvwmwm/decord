// Module ID: 7777
// Function ID: 61766
// Name: getExperimentVariantsForDevTools
// Dependencies: [1946157086, 1979711518, 2030043166]
// Exports: getExperimentVariantsForDevTools

// Module 7777 (getExperimentVariantsForDevTools)
const obj = { displayNameStylesEnabled: "<string:1900022867>", submitButtonEnabled: "call", syncProfileThemeWithUserTheme: "<string:1072527186>", type: require(dependencyMap[0]).Variation_Type.OVERRIDE };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== require(dependencyMap[1]).ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};
