// Module ID: 17174
// Function ID: 17175
// Name: OrbWalletUtils
// Dependencies: [19, 1074, 1387, 7490, 7465, 7752, 5384, 7864, 2]
// Exports: navigateToShopFromOrbWallet, useOpenNitroCheckoutFromOrbWallet, useOrbWalletAnalyticsPage

// Module 17174 (OrbWalletUtils)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7490 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7752 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7864 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const PremiumTypes = PremiumConstants.PremiumTypes;
let obj = { analyticsPage: AnalyticsLocationDefault.ORB_WALLET };
const context = react.createContext(obj);
let obj2 = {
  "1531422538125676707": (analyticsLocations) => {
    analyticsLocations = analyticsLocations.analyticsLocations;
    let ORBS = constants.SHOP_ALL;
    const reopenWallet = analyticsLocations.reopenWallet;
    const tmp = constants;
    if (analyticsLocations === undefined) {
      analyticsLocations = [];
    }
    if (ORBS === undefined) {
      ORBS = tmp.ORBS;
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const obj3 = { analyticsLocations, analyticsSource: AnalyticsLocationDefault.ORBS_BALANCE_MENU, screen: ORBS, onNavigateAway: reopenWallet };
    const result = obj2.openCollectiblesShopMobile(obj3);
  },
  "1531422538125676708": (analyticsLocations) => {
    analyticsLocations = analyticsLocations.analyticsLocations;
    let ORBS = constants.SHOP_ALL;
    const reopenWallet = analyticsLocations.reopenWallet;
    const tmp = constants;
    if (analyticsLocations === undefined) {
      analyticsLocations = [];
    }
    if (ORBS === undefined) {
      ORBS = tmp.ORBS;
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const obj3 = { analyticsLocations, analyticsSource: AnalyticsLocationDefault.ORBS_BALANCE_MENU, screen: ORBS, onNavigateAway: reopenWallet };
    const result = obj2.openCollectiblesShopMobile(obj3);
  },
  "1531422538125676709": (openNitroCheckout) => {
    openNitroCheckout.openNitroCheckout();
  }
};
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletUtils.native.tsx");

export const OrbWalletAnalyticsContext = context;
export function useOrbWalletAnalyticsPage() {
  return react.useContext(context).analyticsPage;
}
export function useOpenNitroCheckoutFromOrbWallet(ORB_CHALLENGE_DISCOVERY_CLICK) {
  let analyticsLocations;
  const objectType = ORB_CHALLENGE_DISCOVERY_CLICK;
  const analyticsPage = react.useContext(context).analyticsPage;
  analyticsLocations = analyticsPage(analyticsLocations[4])(ORB_CHALLENGE_DISCOVERY_CLICK).analyticsLocations;
  const items = [analyticsPage, analyticsLocations, ORB_CHALLENGE_DISCOVERY_CLICK];
  return react.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumType: PremiumTypes.TIER_2 };
    obj2 = { page: analyticsPage, section: AnalyticsLocationDefault.ORB_WALLET, objectType };
    const tmp = openPremiumPlanSelectionActionSheetDefault;
    tmp(obj, "stack");
  }, items);
}
export function navigateToShopFromOrbWallet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  let ORBS = analyticsLocations.screen;
  if (ORBS === undefined) {
    ORBS = constants.ORBS;
  }
  const onNavigateAway = analyticsLocations.onNavigateAway;
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = CollectiblesActionCreators;
  const obj3 = { analyticsLocations, analyticsSource: AnalyticsLocationDefault.ORBS_BALANCE_MENU, screen: ORBS, onNavigateAway };
  const result = obj2.openCollectiblesShopMobile(obj3);
}
export const ORB_CHALLENGE_DISCOVERY_CLICKS = obj2;
