// Module ID: 14022
// Function ID: 14023
// Name: IosAttributionEligibility
// Dependencies: [9561, 1384, 7747, 14023, 2]
// Exports: getIosAttributionClickFramework, isCampaignIosAttributionEnabled, isIosAttributionEligible

// Module 14022 (IosAttributionEligibility)
import QuestDataUtils from "QuestDataUtils" /* 7747 */;
import apexExperiment from "apexExperiment" /* 9561 */;
import IosAttributionNativeModule from "IosAttributionNativeModule" /* 14023 */;
import size from "module_2" /* 2 */;

let tmp;
const PlatformUtils = tmp(1384);
const result = size.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionEligibility.tsx");

export const isIosAttributionEligible = function isIosAttributionEligible() {
  const IosAttributionFeatureGate = apexExperiment.IosAttributionFeatureGate;
  let enabled = IosAttributionFeatureGate.getConfig({ location: "quest_ios_attribution" }).enabled;
  if (enabled) {
    const tmpResult = PlatformUtils;
    enabled = tmpResult.isIOS();
  }
  return enabled;
};
export const isCampaignIosAttributionEnabled = function isCampaignIosAttributionEnabled(sourceQuestContent, item) {
  const obj = QuestDataUtils;
  const adContext = obj.getAdContext(sourceQuestContent, item);
  let prop;
  if (adContext != null) {
    prop = adContext.is_campaign_ios_attribution_enabled;
  }
  return true === prop;
};
export const getIosAttributionClickFramework = function getIosAttributionClickFramework(arg0, sourceQuestContent, adContentId) {
  const IosAttributionFeatureGate = apexExperiment.IosAttributionFeatureGate;
  let enabled = IosAttributionFeatureGate.getConfig({ location: "quest_ios_attribution" }).enabled;
  if (enabled) {
    const tmpResult = PlatformUtils;
    enabled = tmpResult.isIOS();
  }
  let activeIosAttributionFramework = null;
  if (enabled) {
    activeIosAttributionFramework = null;
    if (arg0) {
      const tmpResult3 = QuestDataUtils;
      const adContext = tmpResult3.getAdContext(sourceQuestContent, adContentId);
      let prop;
      if (adContext != null) {
        prop = adContext.is_campaign_ios_attribution_enabled;
      }
      activeIosAttributionFramework = null;
      if (true === prop) {
        const tmpResult4 = IosAttributionNativeModule;
        activeIosAttributionFramework = tmpResult4.getActiveIosAttributionFramework();
      }
    }
  }
  return activeIosAttributionFramework;
};
