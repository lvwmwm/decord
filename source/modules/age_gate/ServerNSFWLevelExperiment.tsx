// Module ID: 1836
// Function ID: 20056
// Name: apexExperiment
// Dependencies: []
// Exports: isServerNSFWLevelEnabled

// Module 1836 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: "<string:1102315522>", DateToSystemTimezoneSetter: "<string:1102315522>", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/age_gate/ServerNSFWLevelExperiment.tsx");

export const ServerNSFWLevelExperiment = apexExperiment;
export const isServerNSFWLevelEnabled = function isServerNSFWLevelEnabled(guild_record) {
  return apexExperiment.getConfig({ location: guild_record }).enabled;
};
