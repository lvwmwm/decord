// Module ID: 14909
// Function ID: 14910
// Name: CollectiblesShopScreen
// Dependencies: [19, 678, 21, 6946, 14910, 6083, 14911, 5809, 2]
// Exports: default

// Module 14909 (CollectiblesShopScreen)
import "noop";
import { CollectiblesMobileShopScreen as closure_3 } from "items";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = require(6946) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = require(14910) /* useShopOrientationLock */.useShopOrientationLock();
  const obj2 = require(14910) /* useShopOrientationLock */;
  const tmp = require;
  const giftCardMobileConsumptionHalfsheet = require(6083) /* useGiftCardMobileConsumptionHalfsheet */.useGiftCardMobileConsumptionHalfsheet();
  const params = settingNavigationRoute.params;
  let screen;
  if (params != null) {
    screen = params.screen;
  }
  if (screen == null) {
    screen = constants.FEATURED_PAGE;
  }
  const params2 = settingNavigationRoute.params;
  let analyticsSource;
  if (params2 != null) {
    analyticsSource = params2.analyticsSource;
  }
  if (analyticsSource == null) {
    analyticsSource = importDefault(5809).COLLECTIBLES_SHOP;
  }
  obj = { analyticsSource, screen, onNavigateAway: null };
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (params3 != null) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj[2] = onNavigateAway;
  return jsx(tmp(14911).CollectiblesShopV2, { analyticsSource, screen, onNavigateAway: null });
};
