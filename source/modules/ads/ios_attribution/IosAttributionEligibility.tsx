// Module ID: 11051
// Function ID: 11052
// Name: isIosAttributionEligible
// Dependencies: [11052, 500, 7411, 11054, 2]
// Exports: getIosAttributionClickFramework, isCampaignIosAttributionEnabled, isIosAttributionEligible

// Module 11051 (isIosAttributionEligible)
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import getQuestDeliveryDataForPlacement from "getQuestDeliveryDataForPlacement" /* 7411 */;
import apexExperiment from "apexExperiment" /* 11052 */;

const result = set.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionEligibility.tsx");

export const isIosAttributionEligible = function isIosAttributionEligible() {
  const IosAttributionFeatureGate = apexExperiment.IosAttributionFeatureGate;
  let enabled = IosAttributionFeatureGate.getConfig({ location: "quest_ios_attribution" }).enabled;
  if (enabled) {
    enabled = set2.isIOS();
    const tmpResult = set2;
  }
  return enabled;
};
export const isCampaignIosAttributionEnabled = function isCampaignIosAttributionEnabled(sourceQuestContent, adContentId) {
  const adContext = getQuestDeliveryDataForPlacement.getAdContext(sourceQuestContent, adContentId);
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
    let tmpResult = tmp(500);
    enabled = tmpResult.isIOS();
  }
  let activeIosAttributionFramework = null;
  if (enabled) {
    activeIosAttributionFramework = null;
    if (arg0) {
      tmpResult = tmp(7411);
      const adContext = tmpResult.getAdContext(sourceQuestContent, adContentId);
      let prop;
      if (adContext != null) {
        prop = adContext.is_campaign_ios_attribution_enabled;
      }
      activeIosAttributionFramework = null;
      if (true === prop) {
        activeIosAttributionFramework = tmp(11054).getActiveIosAttributionFramework();
        const tmpResult1 = tmp(11054);
      }
    }
  }
  return activeIosAttributionFramework;
};
