// Module ID: 10827
// Function ID: 84041
// Name: apexExperiment
// Dependencies: []

// Module 10827 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: false }, [2]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/BountyUseVideoModalMobilePlacementExperiment.tsx");

export default apexExperiment;
