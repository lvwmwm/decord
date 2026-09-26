// Module ID: 7542
// Function ID: 7543
// Name: GuildOfficialMessagesExperiment
// Dependencies: [4701, 2]

// Module 7542 (GuildOfficialMessagesExperiment)
import createExperiment from "module_4701" /* 4701 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
