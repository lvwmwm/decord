// Module ID: 14523
// Function ID: 14524
// Name: HexagonCampaignEntitlements
// Dependencies: [5030, 5032, 5062, 2051, 2]
// Exports: canUseAllAppIcons

// Module 14523 (HexagonCampaignEntitlements)
import PremiumUtilsDefault from "PremiumUtils" /* 2051 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5030 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5032 */;
import size from "module_2" /* 2 */;

let tmp;
const ProductCatalog = tmp(5062);
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignEntitlements.tsx");

export function canUseAllAppIcons(currentUser) {
  let featureValue;
  const obj = HexagonCampaignUtils;
  if (obj.hasPerkOnlyFromHexagonCampaign(currentUser, HexagonCampaignPerk.APP_ICON)) {
    const APP_ICONS = ProductCatalog.APP_ICONS;
    featureValue = APP_ICONS.getFeatureValue(currentUser);
  } else {
    const obj2 = PremiumUtilsDefault;
    featureValue = obj2.canUsePremiumAppIcons(currentUser);
  }
  return featureValue;
}
