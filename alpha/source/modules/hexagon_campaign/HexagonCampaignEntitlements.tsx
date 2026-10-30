// Module ID: 14556
// Function ID: 14557
// Name: HexagonCampaignEntitlements
// Dependencies: [5034, 5036, 5066, 2048, 2]
// Exports: canUseAllAppIcons

// Module 14556 (HexagonCampaignEntitlements)
import PremiumUtilsDefault from "PremiumUtils" /* 2048 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5034 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5036 */;
import size from "module_2" /* 2 */;

let tmp;
const ProductCatalog = tmp(5066);
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
