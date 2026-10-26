// Module ID: 4999
// Function ID: 5000
// Name: HexagonCampaignPerkAvailability
// Dependencies: [1392, 558, 576, 5000, 504, 4998, 2]
// Exports: getHexagonCampaignPerkAvailabilityForCurrentUser, isHexagonCampaignPerkExpiredForCurrentUser

// Module 4999 (HexagonCampaignPerkAvailability)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4998 */;
import HexagonCampaignExperiment from "HexagonCampaignExperiment" /* 5000 */;
import UserStore from "UserStore" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHexagonCampaignPerkAvailability(perk, arg1) {
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(6);
  const obj2 = HexagonCampaignExperiment;
  const isHexagonCampaignEnabled = obj2.useIsHexagonCampaignEnabled(arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      currentUser = currentUser.getCurrentUser();
      let premiumType;
      if (currentUser != null) {
        premiumType = currentUser.premiumType;
      }
      return premiumType;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === isHexagonCampaignEnabled) {
    if (cResult[3] === perk) {
      let tmp9;
      if (cResult[4] === stateFromStores) {
        tmp9 = cResult[5];
      }
      return tmp9;
    }
  }
  const obj3 = { perk, premiumType: stateFromStores, isCampaignEnabled: isHexagonCampaignEnabled };
  const tmpResult2 = HexagonCampaignUtils;
  const hexagonCampaignPerkAvailability = tmpResult2.getHexagonCampaignPerkAvailability(obj3);
  cResult[2] = isHexagonCampaignEnabled;
  cResult[3] = perk;
  cResult[4] = stateFromStores;
  cResult[5] = hexagonCampaignPerkAvailability;
  tmp9 = hexagonCampaignPerkAvailability;
}) : (function useHexagonCampaignPerkAvailability(perk, arg1) {
  const obj = HexagonCampaignExperiment;
  const isHexagonCampaignEnabled = obj.useIsHexagonCampaignEnabled(arg1);
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
  const obj4 = { perk, premiumType: stateFromStores, isCampaignEnabled: isHexagonCampaignEnabled };
  return obj3.getHexagonCampaignPerkAvailability(obj4);
});
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignPerkAvailability.tsx");

export const useHexagonCampaignPerkAvailability = tmp2;
export const getHexagonCampaignPerkAvailabilityForCurrentUser = function getHexagonCampaignPerkAvailabilityForCurrentUser(CLIENT_THEME, MobileThemesUtils) {
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
};
export const isHexagonCampaignPerkExpiredForCurrentUser = function isHexagonCampaignPerkExpiredForCurrentUser(CLIENT_THEME, arg1) {
  const isHexagonCampaignPerkExpired = HexagonCampaignUtils.isHexagonCampaignPerkExpired;
  HexagonCampaignUtils;
  const currentUser = UserStore.getCurrentUser();
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  return isHexagonCampaignPerkExpired(CLIENT_THEME, premiumType, arg1);
};
