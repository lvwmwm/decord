// Module ID: 6687
// Function ID: 6688
// Name: GuildOfficialMessagesExperiment
// Dependencies: [4750, 2]

// Module 6687 (GuildOfficialMessagesExperiment)
import createExperiment from "module_4750" /* 4750 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
