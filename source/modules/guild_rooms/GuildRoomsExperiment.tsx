// Module ID: 16097
// Function ID: 124655
// Name: items
// Dependencies: [4042, 2]

// Module 16097 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2026-06_guild_rooms", label: "Guild Rooms", defaultConfig: { enabled: false, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: false } };
obj = { id: 1, label: "Enable Guild Rooms in this guild", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: true } };
const items = [obj, , , ];
const obj1 = { id: 2, label: "Enable Guild Rooms without Interactions", config: { enabled: true, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: true } };
items[1] = obj1;
const obj2 = { id: 3, label: "Enable Guild Rooms with Room Variants", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } };
items[2] = obj2;
const obj3 = { id: 4, label: "Enable Guild Rooms without Postures", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: false } };
items[3] = obj3;
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomsExperiment.tsx");

export default experiment;
