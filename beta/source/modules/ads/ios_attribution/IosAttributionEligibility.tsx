// Module ID: 15242
// Function ID: 15243
// Name: IosAttributionEligibility
// Dependencies: [10166, 1380, 8804, 15243, 2]
// Exports: getIosAttributionClickFramework, isCampaignIosAttributionEnabled, isIosAttributionEligible

// Module 15242 (IosAttributionEligibility)
import QuestDataUtils from "QuestDataUtils" /* 8804 */;
import apexExperiment from "apexExperiment" /* 10166 */;
import IosAttributionNativeModule from "IosAttributionNativeModule" /* 15243 */;
import size from "module_2" /* 2 */;

let tmp;
const PlatformUtils = tmp(1380);
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
