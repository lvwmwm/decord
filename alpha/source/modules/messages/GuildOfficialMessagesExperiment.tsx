// Module ID: 7345
// Function ID: 7346
// Name: GuildOfficialMessagesExperiment
// Dependencies: [5170, 2]

// Module 7345 (GuildOfficialMessagesExperiment)
import createExperiment from "module_5170" /* 5170 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
