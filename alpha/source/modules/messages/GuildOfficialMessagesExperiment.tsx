// Module ID: 7296
// Function ID: 7297
// Name: GuildOfficialMessagesExperiment
// Dependencies: [5524, 2]

// Module 7296 (GuildOfficialMessagesExperiment)
import createExperiment from "module_5524" /* 5524 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
