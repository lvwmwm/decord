// Module ID: 12227
// Function ID: 12228
// Name: AutomodExperiment
// Dependencies: [4750, 1441, 2]

// Module 12227 (AutomodExperiment)
import createExperiment from "module_4750" /* 4750 */;
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let items;
let obj3;
const obj = { kind: "guild", id: "2022-12_mention_raid_limit", label: "Automod Mention Raid Limit", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Automod Mention Raid Limit", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const obj2 = { name: "2026-09-automod-application-rules", kind: "guild", defaultConfig: { enabled: false }, variations: obj3 };
obj3 = { 1: null };
obj3[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodMentionRaidLimit = experiment;
export const AutomodApplicationRules = apexExperiment;
