// Module ID: 10488
// Function ID: 10489
// Name: IosAttributionEligibility
// Dependencies: [9874, 1378, 8280, 10489, 2]
// Exports: getIosAttributionClickFramework, isCampaignIosAttributionEnabled, isIosAttributionEligible

// Module 10488 (IosAttributionEligibility)
import QuestDataUtils from "QuestDataUtils" /* 8280 */;
import apexExperiment from "apexExperiment" /* 9874 */;
import IosAttributionNativeModule from "IosAttributionNativeModule" /* 10489 */;
import size from "module_2" /* 2 */;

let tmp;
const PlatformUtils = tmp(1378);
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
