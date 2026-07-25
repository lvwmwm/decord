// Module ID: 10205
// Function ID: 78975
// Name: items
// Dependencies: [4043, 2]

// Module 10205 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2022-12_mention_raid_limit", label: "Automod Mention Raid Limit", defaultConfig: { enabled: false } };
obj = { id: 1, label: "Automod Mention Raid Limit", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodMentionRaidLimit = experiment;
