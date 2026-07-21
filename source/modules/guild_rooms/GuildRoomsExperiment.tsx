// Module ID: 15921
// Function ID: 122073
// Name: experiment
// Dependencies: []

// Module 15921 (experiment)
const _module = require(dependencyMap[0]);
let obj = { -1174339580: "Star Glow", -1169096700: 36, config: { current: true, prev: true } };
const items = [obj, ];
obj = { -1174339580: "ios_user_identifiers_manager", -1169096700: "sync_app_transaction_id", config: { current: null, prev: null } };
items[1] = obj;
const experiment = _module.createExperiment({ defaultConfig: { current: null, prev: null }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_rooms/GuildRoomsExperiment.tsx");

export default experiment;
