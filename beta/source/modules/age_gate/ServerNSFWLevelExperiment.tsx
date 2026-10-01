// Module ID: 2064
// Function ID: 2065
// Name: ServerNSFWLevelExperiment
// Dependencies: [1435, 2]
// Exports: isServerNSFWLevelEnabled

// Module 2064 (ServerNSFWLevelExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2025-09-server-nsfw-level", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_gate/ServerNSFWLevelExperiment.tsx");

export const ServerNSFWLevelExperiment = apexExperiment;
export const isServerNSFWLevelEnabled = function isServerNSFWLevelEnabled(guild_record) {
  const obj = { location: guild_record };
  return apexExperiment.getConfig(obj).enabled;
};
