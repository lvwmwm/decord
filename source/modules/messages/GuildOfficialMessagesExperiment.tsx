// Module ID: 7268
// Function ID: 7269
// Name: experiment
// Dependencies: [4474, 2]

// Module 7268 (experiment)
import set from "set" /* 2 */;
import createExperiment from "createExperiment" /* 4474 */;

const items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items });
const result = set.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
