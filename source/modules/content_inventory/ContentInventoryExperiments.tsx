// Module ID: 12497
// Function ID: 95771
// Name: apexExperiment
// Dependencies: []
// Exports: isEligibleForContentInventoryV1, isEligibleForImpressionCapping, useIsHotwheelsClickableGameIconEnabled

// Module 12497 (apexExperiment)
const _module = require(dependencyMap[1]);
let obj = { margin: "displayName", paddingHorizontal: "value", defaultConfig: { getUserVerificationFooterText: null, face_with_hand_over_mouth: null }, variations: { [0]: { getUserVerificationFooterText: null, face_with_hand_over_mouth: null } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[2]);
obj = { y: 16, createBackgroundHighlight: 16, y: null, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.CONNECTION_OPEN, defaultConfig: {} };
const obj1 = { -1174339580: null, -1169096700: "Group 4", config: {} };
const items = [obj1, ];
const obj2 = { -1174339580: -1952366081, -1169096700: -2140012542, config: {} };
items[1] = obj2;
obj.treatments = items;
const experiment = _module1.createExperiment(obj);
const _module2 = require(dependencyMap[1]);
const apexExperiment1 = _module2.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
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
