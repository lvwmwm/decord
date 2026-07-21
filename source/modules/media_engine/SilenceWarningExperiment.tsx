// Module ID: 12713
// Function ID: 97597
// Name: apexExperiment
// Dependencies: []

// Module 12713 (apexExperiment)
let obj = { resetSilenceWarningAfterNMinutes: undefined };
const _module = require(dependencyMap[0]);
obj = { defaultConfig: obj };
obj = {};
const obj1 = {};
const merged = Object.assign(obj);
obj1["resetSilenceWarningOnDeviceChange"] = true;
obj[1] = obj1;
const obj2 = {};
const merged1 = Object.assign(obj);
obj2["resetSilenceWarningAfterNMinutes"] = 10;
obj[2] = obj2;
const obj3 = {};
const merged2 = Object.assign(obj);
obj3["enableHardwareSilenceWarning"] = true;
obj[3] = obj3;
obj.variations = obj;
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/SilenceWarningExperiment.tsx");

export default apexExperiment;
