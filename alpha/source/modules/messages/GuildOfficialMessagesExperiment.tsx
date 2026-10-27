// Module ID: 7370
// Function ID: 7371
// Name: GuildOfficialMessagesExperiment
// Dependencies: [5189, 2]

// Module 7370 (GuildOfficialMessagesExperiment)
import createExperiment from "module_5189" /* 5189 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
