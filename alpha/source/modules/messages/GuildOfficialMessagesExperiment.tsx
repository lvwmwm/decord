// Module ID: 7509
// Function ID: 7510
// Name: GuildOfficialMessagesExperiment
// Dependencies: [5354, 2]

// Module 7509 (GuildOfficialMessagesExperiment)
import createExperiment from "module_5354" /* 5354 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
