// Module ID: 17148
// Function ID: 17149
// Name: CollectiblesShopScreen
// Dependencies: [19, 1073, 21, 7294, 17149, 13931, 17150, 7419, 2]
// Exports: default

// Module 17148 (CollectiblesShopScreen)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1073 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7294 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7419 */;
import useGiftCardMobileConsumptionHalfsheet from "useGiftCardMobileConsumptionHalfsheet" /* 13931 */;
import useShopOrientationLock from "useShopOrientationLock" /* 17149 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const CollectiblesShopV22 = tmp(17150);
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let onNavigateAway;
  const obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const obj2 = useShopOrientationLock;
  const shopOrientationLock = obj2.useShopOrientationLock();
  const obj3 = useGiftCardMobileConsumptionHalfsheet;
  const giftCardMobileConsumptionHalfsheet = obj3.useGiftCardMobileConsumptionHalfsheet();
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
  const CollectiblesShopV2 = CollectiblesShopV22.CollectiblesShopV2;
  const tmp8 = jsx;
  if (params2 != null) {
    analyticsSource = params2.analyticsSource;
  }
  if (analyticsSource == null) {
    analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
  }
  const params3 = settingNavigationRoute.params;
  const obj4 = { analyticsSource, screen, onNavigateAway };
  onNavigateAway = undefined;
  if (params3 != null) {
    onNavigateAway = params3.onNavigateAway;
  }
  return tmp8(CollectiblesShopV2, obj4);
};
