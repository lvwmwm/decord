// Module ID: 7317
// Function ID: 7318
// Name: GuildOfficialMessagesExperiment
// Dependencies: [5149, 2]

// Module 7317 (GuildOfficialMessagesExperiment)
import createExperiment from "module_5149" /* 5149 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
