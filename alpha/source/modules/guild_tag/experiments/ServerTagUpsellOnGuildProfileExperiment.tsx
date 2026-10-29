// Module ID: 14657
// Function ID: 14658
// Name: ServerTagUpsellOnGuildProfileExperiment
// Dependencies: [1453, 2]

// Module 14657 (ServerTagUpsellOnGuildProfileExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-server-tag-upsell-on-guild-profile", kind: "user", defaultConfig: { enabled: false, ignoreSubscriptionPlatform: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, ignoreSubscriptionPlatform: false } };
obj2[2] = { enabled: true, ignoreSubscriptionPlatform: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_tag/experiments/ServerTagUpsellOnGuildProfileExperiment.tsx");

export default apexExperiment;
