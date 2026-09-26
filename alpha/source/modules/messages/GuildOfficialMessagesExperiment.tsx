// Module ID: 6686
// Function ID: 6687
// Name: GuildOfficialMessagesExperiment
// Dependencies: [4748, 2]

// Module 6686 (GuildOfficialMessagesExperiment)
import createExperiment from "module_4748" /* 4748 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
