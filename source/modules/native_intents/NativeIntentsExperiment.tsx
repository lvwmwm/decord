// Module ID: 16413
// Function ID: 126822
// Name: experiment
// Dependencies: []

// Module 16413 (experiment)
const _module = require(dependencyMap[0]);
let obj = { "Bool(false)": 0, "Bool(false)": 51, config: {} };
const items = [obj, , , ];
obj = { "Bool(false)": null, "Bool(false)": null, config: { "Null": -1924062975, "Null": 275849618, "Null": 1358954496 } };
items[1] = obj;
items[2] = { config: { "Null": 24199658097191040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000005825864423171726, "Null": 0.000000000000000000000000000000000000000000000001557556520258325 } };
const obj1 = { "Bool(false)": null, "Bool(false)": "9344f1089c1146b314e038ef9542fb46", config: { "Null": true, "Null": false, "Null": true } };
items[3] = obj1;
const experiment = _module.createExperiment({ defaultConfig: { "Null": true, "Null": false, "Null": false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/native_intents/NativeIntentsExperiment.tsx");

export default experiment;
