// Module ID: 16050
// Function ID: 124333
// Name: items
// Dependencies: [4042, 2]

// Module 16050 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2026-06_guild_rooms", label: "Guild Rooms", defaultConfig: { enabled: false, experimental: false } };
obj = { id: 1, label: "Enable Guild Rooms in this guild", config: { enabled: true, experimental: false } };
const items = [obj, ];
const obj1 = { id: 2, label: "Enable Guild Rooms in this guild", config: { enabled: true, experimental: true } };
items[1] = obj1;
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomsExperiment.tsx");

export default experiment;
