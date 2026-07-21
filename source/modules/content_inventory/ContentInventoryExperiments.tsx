// Module ID: 12499
// Function ID: 95793
// Name: apexExperiment
// Dependencies: []
// Exports: isEligibleForContentInventoryV1, isEligibleForImpressionCapping, useIsHotwheelsClickableGameIconEnabled

// Module 12499 (apexExperiment)
const _module = require(dependencyMap[1]);
let obj = { bottom: 1904843910, name: 6, defaultConfig: { 9223372036854775807: null, -9223372036854775808: null }, variations: { [0]: { 9223372036854775807: null, -9223372036854775808: null } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[2]);
obj = { "Bool(false)": 16, "Bool(false)": 16, "Bool(false)": null, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.CONNECTION_OPEN, defaultConfig: {} };
const obj1 = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: "Group 5", 炖锅: 1, config: {} };
const items = [obj1, ];
const obj2 = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: 24, 炖锅: -60, config: {} };
items[1] = obj2;
obj.treatments = items;
const experiment = _module1.createExperiment(obj);
const _module2 = require(dependencyMap[1]);
const obj3 = { 844175713: 1912603312, 1387159956: 128, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
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
