// Module ID: 15655
// Function ID: 119610
// Name: apexExperiment
// Dependencies: []

// Module 15655 (apexExperiment)
let obj = { CONTROL: 0, [0]: "CONTROL", SCREENSHARE_REPLACES_CHAT: 1, [1]: "SCREENSHARE_REPLACES_CHAT", SCREENSHARE_REPLACES_SOUNDBOARD: 2, [2]: "SCREENSHARE_REPLACES_SOUNDBOARD" };
const _module = require(dependencyMap[0]);
obj = { 9223372036854775807: -50331649, 0: -50331649 };
obj.defaultConfig = { treatment: obj.CONTROL };
obj = { treatment: obj.SCREENSHARE_REPLACES_CHAT };
obj.variations = { [obj.SCREENSHARE_REPLACES_CHAT]: obj, [obj.SCREENSHARE_REPLACES_SOUNDBOARD]: { treatment: obj.SCREENSHARE_REPLACES_SOUNDBOARD } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/go_live/MobileGoLiveEntrypointExperiment.tsx");

export default apexExperiment;
export const MobileGoLiveEntrypointTreatment = obj;
