// Module ID: 10829
// Function ID: 84055
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
const apexExperiment = _module.createApexExperiment({ defaultConfig: {}, variations: { [1]: { accessibilityRole: "/assets/design/components/Icon/native/redesign/generated/images", y: 24, "Null": 24, "Null": null, "Null": "eac553938fe05ac1b820e85a05890a1f", "Null": "SlashBoxIcon", flexDirection: "png" }, [2]: { accessibilityRole: "always", y: false, "Null": "list", "Null": true, "Null": true, "Null": true, flexDirection: true }, [3]: { accessibilityRole: "value", y: "includes", "Null": "PX_16", "Null": "end", "Null": "PX_16", "Null": "end", flexDirection: "PX_16" }, [4]: { accessibilityRole: 0.1607843137254902, y: "OPACITY_BLURPLE_12", "Null": 0.12156862745098039, "Null": "OPACITY_BLURPLE_20", "Null": 0.2, "Null": "OPACITY_YELLOW_4", flexDirection: 0.0392156862745098 }, [5]: { accessibilityRole: "Array", y: "warn", "Null": "<string:2851877393>", "Null": "<string:1649267441>", "Null": "<string:2851880784>", "Null": "<string:1649267441>", flexDirection: "<string:342966096>" } } });
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
