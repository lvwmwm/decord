// Module ID: 14594
// Function ID: 14595
// Name: HexagonCampaignEntitlements
// Dependencies: [5039, 5041, 5071, 2047, 2]
// Exports: canUseAllAppIcons

// Module 14594 (HexagonCampaignEntitlements)
import PremiumUtilsDefault from "PremiumUtils" /* 2047 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5039 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5041 */;
import size from "module_2" /* 2 */;

let tmp;
const ProductCatalog = tmp(5071);
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
