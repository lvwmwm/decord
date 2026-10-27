// Module ID: 19055
// Function ID: 19056
// Name: AutomodExperiment
// Dependencies: [1452, 2]

// Module 19055 (AutomodExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-automod-application-rules", kind: "guild", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodApplicationRules = apexExperiment;
