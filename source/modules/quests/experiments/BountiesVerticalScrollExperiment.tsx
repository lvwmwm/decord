// Module ID: 10830
// Function ID: 84079
// Name: shouldUseScrollIndicatorOverlay
// Dependencies: []
// Exports: useIsBountiesVerticalScrollExperimentActive, useIsBountiesVerticalScrollExperimentEnabled, useIsScrollIndicatorOverlayVariant

// Module 10830 (shouldUseScrollIndicatorOverlay)
function shouldUseScrollIndicatorOverlay(scrollAffordanceVariant) {
  let tmp = "indicator" === scrollAffordanceVariant;
  if (!tmp) {
    tmp = "peek" === scrollAffordanceVariant;
  }
  return tmp;
}
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: {}, variations: { [1]: { 0: "b49ac54ee052ec8e0d12b9dcde20cf19", 0: "icon-settings", 0: "png", "Bool(false)": true, "Bool(false)": "/assets/design/components/Icon/native/redesign/generated/images", "Bool(false)": 24, "Bool(false)": 24 }, [2]: { 0: 1, 0: 5, 0: "center", "Bool(false)": -72, "Bool(false)": 16, "Bool(false)": "100%", "Bool(false)": "contain" }, [3]: { 0: "<string:1912602975>", 0: "accessibilityLabel", 0: "accessibilityLabel", "Bool(false)": "<string:2897625601>", "Bool(false)": "<string:3220570113>", "Bool(false)": "<string:4132503554>", "Bool(false)": "<string:1245778413>" }, [4]: { 0: "string", 0: "paddingHorizontal", 0: "messageId", "Bool(false)": "includes", "Bool(false)": "from", "Bool(false)": "end", "Bool(false)": "from" }, [5]: {} } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/BountiesVerticalScrollExperiment.tsx");

export const BountiesVerticalScrollExperiment = apexExperiment;
export const useIsBountiesVerticalScrollExperimentEnabled = function useIsBountiesVerticalScrollExperimentEnabled(BountiesScrollEndCard) {
  return apexExperiment.useConfig({ location: BountiesScrollEndCard }).verticalScrollEnabled;
};
export const useIsBountiesVerticalScrollExperimentActive = function useIsBountiesVerticalScrollExperimentActive(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export { shouldUseScrollIndicatorOverlay };
export const useIsScrollIndicatorOverlayVariant = function useIsScrollIndicatorOverlayVariant(location) {
  return shouldUseScrollIndicatorOverlay(apexExperiment.useConfig({ location }).scrollAffordanceVariant);
};
