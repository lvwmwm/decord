// Module ID: 7596
// Function ID: 7597
// Name: GuildOfficialMessagesExperiment
// Dependencies: [6013, 2]

// Module 7596 (GuildOfficialMessagesExperiment)
import createExperiment from "module_6013" /* 6013 */;
import size from "module_2" /* 2 */;

let items;
const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
