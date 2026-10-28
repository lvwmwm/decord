// Module ID: 14289
// Function ID: 14290
// Name: HexagonCampaignEntitlements
// Dependencies: [5029, 5031, 5061, 2050, 2]
// Exports: canUseAllAppIcons

// Module 14289 (HexagonCampaignEntitlements)
import PremiumUtilsDefault from "PremiumUtils" /* 2050 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5029 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5031 */;
import size from "module_2" /* 2 */;

let tmp;
const ProductCatalog = tmp(5061);
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
