// Module ID: 10608
// Function ID: 10609
// Name: IosAttributionEligibility
// Dependencies: [9994, 1378, 8400, 10609, 2]
// Exports: getIosAttributionClickFramework, isCampaignIosAttributionEnabled, isIosAttributionEligible

// Module 10608 (IosAttributionEligibility)
import QuestDataUtils from "QuestDataUtils" /* 8400 */;
import apexExperiment from "apexExperiment" /* 9994 */;
import IosAttributionNativeModule from "IosAttributionNativeModule" /* 10609 */;
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
