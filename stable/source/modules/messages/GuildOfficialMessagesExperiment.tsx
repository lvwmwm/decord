// Module ID: 7442
// Function ID: 7443
// Name: GuildOfficialMessagesExperiment
// Dependencies: [5236, 2]

// Module 7442 (GuildOfficialMessagesExperiment)
import createExperiment from "module_5236" /* 5236 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
