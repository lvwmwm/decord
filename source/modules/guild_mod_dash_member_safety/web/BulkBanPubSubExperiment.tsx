// Module ID: 12605
// Function ID: 97453
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useBulkBanPubSubExperimentConfig

// Module 12605 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-pubsub-bulk-ban-users", kind: "user", defaultConfig: { usePubSub: false }, variations: { [1]: { usePubSub: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/web/BulkBanPubSubExperiment.tsx");

export default apexExperiment;
export const useBulkBanPubSubExperimentConfig = function useBulkBanPubSubExperimentConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
