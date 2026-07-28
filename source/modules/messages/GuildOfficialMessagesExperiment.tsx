// Module ID: 6029
// Function ID: 53435
// Name: items
// Dependencies: [4077, 2]

// Module 6029 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false } };
obj = { id: 1, label: "Enable official messages", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
