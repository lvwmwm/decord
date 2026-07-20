// Module ID: 14181
// Function ID: 107367
// Name: apexExperiment
// Dependencies: []

// Module 14181 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: "Performance testing", -1845285747: false, defaultConfig: { inHoldout: false }, variations: { [0]: { inHoldout: false }, [1]: { inHoldout: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
