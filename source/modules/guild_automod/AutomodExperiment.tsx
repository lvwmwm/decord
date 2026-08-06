// Module ID: 9692
// Function ID: 9693
// Name: experiment
// Dependencies: [4197, 2]

// Module 9692 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Automod Mention Raid Limit", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2022-12_mention_raid_limit", label: "Automod Mention Raid Limit", defaultConfig: { enabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodMentionRaidLimit = experiment;
