// Module ID: 14739
// Function ID: 14740
// Name: HexagonCampaignEntitlements
// Dependencies: [5166, 5168, 5198, 2176, 2]
// Exports: canUseAllAppIcons

// Module 14739 (HexagonCampaignEntitlements)
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5166 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5168 */;
import size from "module_2" /* 2 */;

let tmp;
const ProductCatalog = tmp(5198);
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
