// Module ID: 5712
// Function ID: 49099
// Name: apexExperiment
// Dependencies: []
// Exports: useBulkBanPubSubExperimentConfig

// Module 5712 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "<string:1359168909>", 0: "<string:141922323>", defaultConfig: { usePubSub: false }, variations: { [1]: { usePubSub: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_mod_dash_member_safety/web/BulkBanPubSubExperiment.tsx");

export default apexExperiment;
export const useBulkBanPubSubExperimentConfig = function useBulkBanPubSubExperimentConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
