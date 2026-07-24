// Module ID: 10272
// Function ID: 79322
// Name: items
// Dependencies: [4042, 2]

// Module 10272 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2022-12_mention_raid_limit", label: "Automod Mention Raid Limit", defaultConfig: { enabled: false } };
obj = { id: 1, label: "Automod Mention Raid Limit", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodMentionRaidLimit = experiment;
