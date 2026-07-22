// Module ID: 12504
// Function ID: 95821
// Name: apexExperiment
// Dependencies: []
// Exports: isEligibleForContentInventoryV1, isEligibleForImpressionCapping, useIsHotwheelsClickableGameIconEnabled

// Module 12504 (apexExperiment)
const _module = require(dependencyMap[1]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { "Null": null, "Null": null }, variations: { [0]: { "Null": true, "Null": true } } });
const _module1 = require(dependencyMap[2]);
let obj = { shapes: null, flex: null, sk: null, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.CONNECTION_OPEN, defaultConfig: {} };
obj = { displayNameStylesEnabled: null, submitButtonEnabled: "Group 5", config: {} };
const items = [obj, ];
const obj1 = { displayNameStylesEnabled: 24, submitButtonEnabled: -60, config: {} };
items[1] = obj1;
obj.treatments = items;
const experiment = _module1.createExperiment(obj);
const _module2 = require(dependencyMap[1]);
const obj2 = { y: "<string:2154954753>", DateToSystemTimezoneSetter: "<string:2080374784>", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = _module2.createApexExperiment(obj2);
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
