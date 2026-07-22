// Module ID: 15933
// Function ID: 122160
// Name: items
// Dependencies: []

// Module 15933 (items)
const _module = require(dependencyMap[0]);
let obj = { shapes: null, flex: null, sk: null, defaultConfig: {} };
obj = { displayNameStylesEnabled: "text-md/semibold", submitButtonEnabled: "interactive-text-active", config: {} };
const items = [obj, { config: {} }];
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_rooms/GuildRoomsExperiment.tsx");

export default experiment;
