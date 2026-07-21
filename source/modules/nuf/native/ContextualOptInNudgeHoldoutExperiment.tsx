// Module ID: 14188
// Function ID: 107390
// Name: apexExperiment
// Dependencies: []

// Module 14188 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "Performance testing", 0: false, defaultConfig: { inHoldout: false }, variations: { [0]: { inHoldout: false }, [1]: { inHoldout: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
