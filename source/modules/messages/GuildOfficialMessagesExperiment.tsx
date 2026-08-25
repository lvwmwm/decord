// Module ID: 5995
// Function ID: 5996
// Name: experiment
// Dependencies: [4291, 2]

// Module 5995 (experiment)
import set from "set" /* 2 */;
import createExperiment from "createExperiment" /* 4291 */;

const items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items });
const result = set.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
