// Module ID: 14066
// Function ID: 14067
// Name: HexagonCampaignEntitlements
// Dependencies: [4997, 4999, 5029, 2050, 2]
// Exports: canUseAllAppIcons

// Module 14066 (HexagonCampaignEntitlements)
import PremiumUtilsDefault from "PremiumUtils" /* 2050 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4997 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4999 */;
import size from "module_2" /* 2 */;

let tmp;
const ProductCatalog = tmp(5029);
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
