// Module ID: 14592
// Function ID: 14593
// Name: IosAttributionEligibility
// Dependencies: [9670, 1381, 7830, 14593, 2]
// Exports: getIosAttributionClickFramework, isCampaignIosAttributionEnabled, isIosAttributionEligible

// Module 14592 (IosAttributionEligibility)
import QuestDataUtils from "QuestDataUtils" /* 7830 */;
import apexExperiment from "apexExperiment" /* 9670 */;
import IosAttributionNativeModule from "IosAttributionNativeModule" /* 14593 */;
import size from "module_2" /* 2 */;

let tmp;
const PlatformUtils = tmp(1381);
const result = size.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionEligibility.tsx");

export function isIosAttributionEligible() {
  const IosAttributionFeatureGate = apexExperiment.IosAttributionFeatureGate;
  let enabled = IosAttributionFeatureGate.getConfig({ location: "quest_ios_attribution" }).enabled;
  if (enabled) {
    const tmpResult = PlatformUtils;
    enabled = tmpResult.isIOS();
  }
  return enabled;
}
export function isCampaignIosAttributionEnabled(sourceQuestContent, item) {
  const obj = QuestDataUtils;
  const adContext = obj.getAdContext(sourceQuestContent, item);
  let prop;
  if (adContext != null) {
    prop = adContext.is_campaign_ios_attribution_enabled;
  }
  return true === prop;
}
export function getIosAttributionClickFramework(arg0, sourceQuestContent, adContentId) {
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
}
