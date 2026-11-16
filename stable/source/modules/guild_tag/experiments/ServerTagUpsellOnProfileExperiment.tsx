// Module ID: 14998
// Function ID: 14999
// Name: ServerTagUpsellOnProfileExperiment
// Dependencies: [1449, 2]

// Module 14998 (ServerTagUpsellOnProfileExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-server-tag-upsell-on-profile", kind: "user", defaultConfig: { enabled: false, ignoreSubscriptionPlatform: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, ignoreSubscriptionPlatform: false } };
obj2[2] = { enabled: true, ignoreSubscriptionPlatform: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_tag/experiments/ServerTagUpsellOnProfileExperiment.tsx");

export default apexExperiment;
