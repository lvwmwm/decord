// Module ID: 1836
// Function ID: 20051
// Name: apexExperiment
// Dependencies: []
// Exports: isServerNSFWLevelEnabled

// Module 1836 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "<string:1098907650>", 0: "<string:1098907650>", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/age_gate/ServerNSFWLevelExperiment.tsx");

export const ServerNSFWLevelExperiment = apexExperiment;
export const isServerNSFWLevelEnabled = function isServerNSFWLevelEnabled(guild_record) {
  return apexExperiment.getConfig({ location: guild_record }).enabled;
};
