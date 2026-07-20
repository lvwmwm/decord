// Module ID: 10823
// Function ID: 84032
// Name: shouldUseScrollIndicatorOverlay
// Dependencies: []
// Exports: useIsBountiesVerticalScrollExperimentActive, useIsBountiesVerticalScrollExperimentEnabled, useIsScrollIndicatorOverlayVariant

// Module 10823 (shouldUseScrollIndicatorOverlay)
function shouldUseScrollIndicatorOverlay(scrollAffordanceVariant) {
  let tmp = "indicator" === scrollAffordanceVariant;
  if (!tmp) {
    tmp = "peek" === scrollAffordanceVariant;
  }
  return tmp;
}
const _module = require(dependencyMap[0]);
const obj = { -1269606814: true, -1845285747: true, defaultConfig: {}, variations: { [1]: {}, [2]: { "Bool(true)": "minResolutionWidth", "Bool(true)": "minResolutionWidth", "Bool(true)": "animatedValue", "Bool(true)": "onSwipeableLeftOpen", "Bool(true)": "onSwipeableLeftOpen", "Bool(true)": "onSwipeableLeftOpen", "Bool(true)": "onSwipeableLeftOpen" }, [3]: {}, [4]: { "Bool(true)": "enabled", "Bool(true)": "includes", "Bool(true)": "Icon", "Bool(true)": "end", "Bool(true)": "Icon", "Bool(true)": "end", "Bool(true)": "Icon" }, [5]: {} } };
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
