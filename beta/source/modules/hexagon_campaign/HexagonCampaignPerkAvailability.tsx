// Module ID: 4943
// Function ID: 4944
// Name: HexagonCampaignPerkAvailability
// Dependencies: [1386, 4944, 504, 4941, 2]
// Exports: getHexagonCampaignPerkAvailabilityForCurrentUser, isHexagonCampaignPerkExpiredForCurrentUser, useHexagonCampaignPerkAvailability, useHexagonCampaignPerkAvailabilityIgnoringExperiment

// Module 4943 (HexagonCampaignPerkAvailability)
import get_initialized from "get initialized" /* 504 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4941 */;
import HexagonCampaignExperiment from "HexagonCampaignExperiment" /* 4944 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignPerkAvailability.tsx");

export function useHexagonCampaignPerkAvailability(DISPLAY_NAME_STYLE, HexagonCampaignSheet) {
  const obj = HexagonCampaignExperiment;
  const isHexagonCampaignEnabled = obj.useIsHexagonCampaignEnabled(HexagonCampaignSheet);
  const items = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const obj3 = HexagonCampaignUtils;
  const obj4 = { perk: DISPLAY_NAME_STYLE, premiumType: stateFromStores, isCampaignEnabled: isHexagonCampaignEnabled };
  return obj3.getHexagonCampaignPerkAvailability(obj4);
}
export function useHexagonCampaignPerkAvailabilityIgnoringExperiment(perk) {
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const obj2 = HexagonCampaignUtils;
  const obj3 = { perk, premiumType: stateFromStores, isCampaignEnabled: true };
  return obj2.getHexagonCampaignPerkAvailability(obj3);
}
export function getHexagonCampaignPerkAvailabilityForCurrentUser(CLIENT_THEME, MobileThemesUtils) {
  let premiumType;
  let tmpResult;
  const obj = { perk: CLIENT_THEME, premiumType, isCampaignEnabled: tmpResult.getIsHexagonCampaignEnabled(MobileThemesUtils) };
  const getHexagonCampaignPerkAvailability = HexagonCampaignUtils.getHexagonCampaignPerkAvailability;
  HexagonCampaignUtils;
  const currentUser = UserStore.getCurrentUser();
  premiumType = undefined;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  tmpResult = HexagonCampaignExperiment;
  return getHexagonCampaignPerkAvailability(obj);
}
export function isHexagonCampaignPerkExpiredForCurrentUser(CLIENT_THEME, arg1) {
  const isHexagonCampaignPerkExpired = HexagonCampaignUtils.isHexagonCampaignPerkExpired;
  HexagonCampaignUtils;
  const currentUser = UserStore.getCurrentUser();
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  return isHexagonCampaignPerkExpired(CLIENT_THEME, premiumType, arg1);
}
