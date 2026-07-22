// Module ID: 5711
// Function ID: 49115
// Name: apexExperiment
// Dependencies: []
// Exports: useBulkBanPubSubExperimentConfig

// Module 5711 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: 1305670194, DateToSystemTimezoneSetter: -447213470, defaultConfig: { usePubSub: false }, variations: { [1]: { usePubSub: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_mod_dash_member_safety/web/BulkBanPubSubExperiment.tsx");

export default apexExperiment;
export const useBulkBanPubSubExperimentConfig = function useBulkBanPubSubExperimentConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
