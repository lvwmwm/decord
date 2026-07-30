// Module ID: 14598
// Function ID: 14599
// Name: CollectiblesShopScreen
// Dependencies: [19, 678, 21, 6327, 14599, 12480, 14600, 5535, 2]
// Exports: default

// Module 14598 (CollectiblesShopScreen)
import "noop";
import { CollectiblesMobileShopScreen as closure_3 } from "items";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = require(6327) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = require(14599) /* useShopOrientationLock */.useShopOrientationLock();
  const obj2 = require(14599) /* useShopOrientationLock */;
  const tmp = require;
  const giftCardMobileConsumptionHalfsheet = require(12480) /* useGiftCardMobileConsumptionHalfsheet */.useGiftCardMobileConsumptionHalfsheet();
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
    analyticsSource = importDefault(5535).COLLECTIBLES_SHOP;
  }
  obj = { analyticsSource, screen, onNavigateAway: null };
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (params3 != null) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj[2] = onNavigateAway;
  return jsx(tmp(14600).CollectiblesShopV2, { analyticsSource, screen, onNavigateAway: null });
};
