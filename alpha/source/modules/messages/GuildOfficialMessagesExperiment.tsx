// Module ID: 7506
// Function ID: 7507
// Name: GuildOfficialMessagesExperiment
// Dependencies: [5352, 2]

// Module 7506 (GuildOfficialMessagesExperiment)
import createExperiment from "module_5352" /* 5352 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
