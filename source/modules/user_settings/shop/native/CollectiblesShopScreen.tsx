// Module ID: 14895
// Function ID: 14896
// Name: CollectiblesShopScreen
// Dependencies: [19, 678, 21, 6919, 14896, 6060, 14897, 5787, 2]
// Exports: default

// Module 14895 (CollectiblesShopScreen)
import "noop";
import { CollectiblesMobileShopScreen as closure_3 } from "items";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = require(6919) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = require(14896) /* useShopOrientationLock */.useShopOrientationLock();
  const obj2 = require(14896) /* useShopOrientationLock */;
  const tmp = require;
  const giftCardMobileConsumptionHalfsheet = require(6060) /* useGiftCardMobileConsumptionHalfsheet */.useGiftCardMobileConsumptionHalfsheet();
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
    analyticsSource = importDefault(5787).COLLECTIBLES_SHOP;
  }
  obj = { analyticsSource, screen, onNavigateAway: null };
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (params3 != null) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj[2] = onNavigateAway;
  return jsx(tmp(14897).CollectiblesShopV2, { analyticsSource, screen, onNavigateAway: null });
};
