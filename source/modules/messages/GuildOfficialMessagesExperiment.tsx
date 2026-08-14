// Module ID: 5950
// Function ID: 5951
// Name: experiment
// Dependencies: [4254, 2]

// Module 5950 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Enable official messages", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-03_guild_official_messages", label: "Guild Official Messages", defaultConfig: { enabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
