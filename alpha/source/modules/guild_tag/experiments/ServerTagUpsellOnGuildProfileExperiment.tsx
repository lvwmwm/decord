// Module ID: 14110
// Function ID: 14111
// Name: ServerTagUpsellOnGuildProfileExperiment
// Dependencies: [1455, 2]

// Module 14110 (ServerTagUpsellOnGuildProfileExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-server-tag-upsell-on-guild-profile", kind: "user", defaultConfig: { enabled: false, ignoreSubscriptionPlatform: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, ignoreSubscriptionPlatform: false } };
obj2[2] = { enabled: true, ignoreSubscriptionPlatform: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_tag/experiments/ServerTagUpsellOnGuildProfileExperiment.tsx");

export default apexExperiment;
