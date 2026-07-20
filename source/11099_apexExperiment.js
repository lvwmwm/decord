// Module ID: 11099
// Function ID: 86405
// Name: apexExperiment
// Dependencies: []

// Module 11099 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/chat_input/native/ChatInputFabricExperiment.tsx");

export default apexExperiment;
