// Module ID: 14191
// Function ID: 107422
// Name: apexExperiment
// Dependencies: []

// Module 14191 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { inHoldout: false }, variations: { [0]: { inHoldout: false }, [1]: { inHoldout: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
