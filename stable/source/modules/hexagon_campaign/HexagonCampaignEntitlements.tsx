// Module ID: 14083
// Function ID: 14084
// Name: HexagonCampaignEntitlements
// Dependencies: [5028, 5030, 5060, 2053, 2]
// Exports: canUseAllAppIcons

// Module 14083 (HexagonCampaignEntitlements)
import PremiumUtilsDefault from "PremiumUtils" /* 2053 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5028 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5030 */;
import size from "module_2" /* 2 */;

let tmp;
const ProductCatalog = tmp(5060);
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignEntitlements.tsx");

export const canUseAllAppIcons = function canUseAllAppIcons(currentUser) {
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
};
