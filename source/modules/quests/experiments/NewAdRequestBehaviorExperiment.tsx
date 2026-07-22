// Module ID: 6952
// Function ID: 55541
// Name: apexExperiment
// Dependencies: []

// Module 6952 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enableNewRequestBehavior: false }, variations: { [1]: { enableNewRequestBehavior: false }, [2]: { enableNewRequestBehavior: true }, [3]: { enableNewRequestBehavior: false }, [4]: { enableNewRequestBehavior: true }, [5]: { enableNewRequestBehavior: true }, [6]: { enableNewRequestBehavior: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/NewAdRequestBehaviorExperiment.tsx");

export default apexExperiment;
