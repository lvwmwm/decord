// Module ID: 10206
// Function ID: 10207
// Name: experiment
// Dependencies: [4389, 2]

// Module 10206 (experiment)
import set from "set" /* 2 */;
import createExperiment from "createExperiment" /* 4389 */;

const items = [{ id: 1, label: "Automod Mention Raid Limit", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2022-12_mention_raid_limit", label: "Automod Mention Raid Limit", defaultConfig: { enabled: false }, treatments: items });
const result = set.fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodMentionRaidLimit = experiment;
