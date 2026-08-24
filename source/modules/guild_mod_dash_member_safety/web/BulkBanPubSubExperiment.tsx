// Module ID: 7323
// Function ID: 7324
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: useBulkBanPubSubExperimentConfig

// Module 7323 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { usePubSub: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-pubsub-bulk-ban-users", kind: "user", defaultConfig: { usePubSub: false }, variations: obj });
const result = set.fileFinishedImporting("modules/guild_mod_dash_member_safety/web/BulkBanPubSubExperiment.tsx");

export default apexExperiment;
export const useBulkBanPubSubExperimentConfig = function useBulkBanPubSubExperimentConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
