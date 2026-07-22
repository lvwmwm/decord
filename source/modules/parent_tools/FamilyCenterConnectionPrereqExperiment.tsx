// Module ID: 11062
// Function ID: 86098
// Name: apexExperiment
// Dependencies: []

// Module 11062 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/parent_tools/FamilyCenterConnectionPrereqExperiment.tsx");

export const FamilyCenterConnectionPrereqExperiment = apexExperiment;
