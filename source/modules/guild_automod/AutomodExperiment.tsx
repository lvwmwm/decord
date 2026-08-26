// Module ID: 9998
// Function ID: 9999
// Name: experiment
// Dependencies: [4355, 2]

// Module 9998 (experiment)
import set from "set" /* 2 */;
import createExperiment from "createExperiment" /* 4355 */;

const items = [{ id: 1, label: "Automod Mention Raid Limit", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2022-12_mention_raid_limit", label: "Automod Mention Raid Limit", defaultConfig: { enabled: false }, treatments: items });
const result = set.fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodMentionRaidLimit = experiment;
