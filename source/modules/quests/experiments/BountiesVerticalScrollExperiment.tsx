// Module ID: 10829
// Function ID: 84066
// Name: shouldUseScrollIndicatorOverlay
// Dependencies: []
// Exports: useIsBountiesVerticalScrollExperimentActive, useIsBountiesVerticalScrollExperimentEnabled, useIsScrollIndicatorOverlayVariant

// Module 10829 (shouldUseScrollIndicatorOverlay)
function shouldUseScrollIndicatorOverlay(scrollAffordanceVariant) {
  let tmp = "indicator" === scrollAffordanceVariant;
  if (!tmp) {
    tmp = "peek" === scrollAffordanceVariant;
  }
  return tmp;
}
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: {}, variations: { [1]: { accessibilityRole: 1665208787, "": 1912603216, "Null": 24, "Null": 24, "Null": -621133567, flexDirection: 609353729, marginBottom: 30636163 }, [2]: { accessibilityRole: "<string:2152796416>", "": "<string:1666261350>", "Null": "renderer", "Null": "BUTTON_BORDER_WIDTH", "Null": "BUTTON_BORDER_WIDTH", flexDirection: "BUTTON_BORDER_WIDTH", marginBottom: "<string:1518878976>" }, [3]: {}, [4]: {}, [5]: { accessibilityRole: "FAVORITES_RAW_GUILD_ID", "": "customEmojiFromJoinedGuild", "Null": "deletedActionButton", "Null": "throwOnError", "Null": "image", flexDirection: "FAVORITES_RAW_GUILD_ID", marginBottom: "FAVORITES_RAW_GUILD_ID" } } });
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
