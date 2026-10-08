// Module ID: 6957
// Function ID: 6958
// Name: GuildOfficialMessagesExperiment
// Dependencies: [4974, 2]

// Module 6957 (GuildOfficialMessagesExperiment)
import createExperiment from "module_4974" /* 4974 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
