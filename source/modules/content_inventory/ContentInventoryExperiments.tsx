// Module ID: 12490
// Function ID: 95748
// Name: apexExperiment
// Dependencies: []
// Exports: isEligibleForContentInventoryV1, isEligibleForImpressionCapping, useIsHotwheelsClickableGameIconEnabled

// Module 12490 (apexExperiment)
const _module = require(dependencyMap[1]);
let obj = { "Null": "displayName", "Null": "st", defaultConfig: {}, variations: { [0]: {} } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[2]);
obj = { commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.CONNECTION_OPEN, defaultConfig: {}, treatments: items };
const obj1 = { "Bool(false)": "r", "Bool(false)": "CONNECTIONS_AUTHORIZE", config: {} };
const items = [obj1, ];
const obj2 = { "Bool(false)": 24, "Bool(false)": -60, config: {} };
items[1] = obj2;
const experiment = _module1.createExperiment(obj);
const _module2 = require(dependencyMap[1]);
const obj3 = { -1269606814: -2140012542, -1845285747: 2080374784, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = _module2.createApexExperiment(obj3);
const _module3 = require(dependencyMap[4]);
const result = _module3.fileFinishedImporting("modules/content_inventory/ContentInventoryExperiments.tsx");

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
