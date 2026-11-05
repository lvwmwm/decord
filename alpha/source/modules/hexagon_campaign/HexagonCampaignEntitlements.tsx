// Module ID: 14833
// Function ID: 14834
// Name: HexagonCampaignEntitlements
// Dependencies: [5168, 5170, 5200, 2176, 2]
// Exports: canUseAllAppIcons

// Module 14833 (HexagonCampaignEntitlements)
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5168 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5170 */;
import size from "module_2" /* 2 */;

let tmp;
const ProductCatalog = tmp(5200);
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
