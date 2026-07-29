// Module ID: 12627
// Function ID: 12628
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: useBulkBanPubSubExperimentConfig

// Module 12627 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { usePubSub: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-pubsub-bulk-ban-users", kind: "user", defaultConfig: { usePubSub: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/web/BulkBanPubSubExperiment.tsx");

export default apexExperiment;
export const useBulkBanPubSubExperimentConfig = function useBulkBanPubSubExperimentConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
