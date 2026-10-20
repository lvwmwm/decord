// Module ID: 14000
// Function ID: 14001
// Name: ServerTagUpsellOnProfileExperiment
// Dependencies: [1455, 2]

// Module 14000 (ServerTagUpsellOnProfileExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-server-tag-upsell-on-profile", kind: "user", defaultConfig: { enabled: false, ignoreSubscriptionPlatform: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, ignoreSubscriptionPlatform: false } };
obj2[2] = { enabled: true, ignoreSubscriptionPlatform: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_tag/experiments/ServerTagUpsellOnProfileExperiment.tsx");

export default apexExperiment;
