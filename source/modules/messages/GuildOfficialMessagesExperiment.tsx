// Module ID: 6045
// Function ID: 6046
// Name: experiment
// Dependencies: [4101, 2]

// Module 6045 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
