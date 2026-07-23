// Module ID: 12618
// Function ID: 97977
// Name: apexExperiment
// Dependencies: [4045, 1428, 4042, 8322, 2]
// Exports: isEligibleForContentInventoryV1, isEligibleForImpressionCapping, useIsHotwheelsClickableGameIconEnabled

// Module 12618 (apexExperiment)
import ApexExperiment from "ApexExperiment";
import createExperiment from "createExperiment";
import ApexExperiment from "ApexExperiment";

let obj = { kind: "user", name: "2026-03-content-inventory-memberlist-and-ranker", defaultConfig: { enabled: true, impressionCappingEnabled: true }, variations: { [0]: { enabled: false, impressionCappingEnabled: false } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
obj = { kind: "user", id: "2025-09_hotwheels_nvidia_boost", label: "Next iteration of the activity feed ranking model.", commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.CONNECTION_OPEN, defaultConfig: {} };
const obj1 = { id: 16, label: "ML model V3 - Nvidia small boost", config: {} };
const items = [obj1, ];
const obj2 = { id: 17, label: "ML model V3 - Nvidia big boost", config: {} };
items[1] = obj2;
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const obj3 = { name: "2026-07-hotwheels-clickable-game-icon", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
const result = require("createExperiment").fileFinishedImporting("modules/content_inventory/ContentInventoryExperiments.tsx");

export const MemberlistRankerExperiment = apexExperiment;
export const HotwheelsActivityFeedNvidiaExperiment = experiment;
export const HotwheelsClickableGameIconExperiment = apexExperiment1;
export const useIsHotwheelsClickableGameIconEnabled = function useIsHotwheelsClickableGameIconEnabled(location) {
  return apexExperiment1.useConfig({ location }).enabled;
};
export const isEligibleForContentInventoryV1 = function isEligibleForContentInventoryV1(ContentInventoryManager) {
  let enabled = apexExperiment.getConfig({ location: ContentInventoryManager }).enabled;
  if (!enabled) {
    enabled = obj2.getICYMIEnabled(ContentInventoryManager);
  }
  return enabled;
};
export const isEligibleForImpressionCapping = function isEligibleForImpressionCapping(location) {
  const config = apexExperiment.getConfig({ location });
  let enabled = config.enabled;
  if (enabled) {
    enabled = true === tmp2;
  }
  return enabled;
};
