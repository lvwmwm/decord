// Module ID: 1836
// Function ID: 20057
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: isServerNSFWLevelEnabled

// Module 1836 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-09-server-nsfw-level", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/age_gate/ServerNSFWLevelExperiment.tsx");

export const ServerNSFWLevelExperiment = apexExperiment;
export const isServerNSFWLevelEnabled = function isServerNSFWLevelEnabled(guild_record) {
  return apexExperiment.getConfig({ location: guild_record }).enabled;
};
