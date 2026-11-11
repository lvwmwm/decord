// Module ID: 18354
// Function ID: 18355
// Name: CollectiblesShopScreen
// Dependencies: [19, 1074, 21, 7746, 18355, 15207, 18356, 7871, 2]
// Exports: default

// Module 18354 (CollectiblesShopScreen)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7746 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7871 */;
import useGiftCardMobileConsumptionHalfsheet from "useGiftCardMobileConsumptionHalfsheet" /* 15207 */;
import useShopOrientationLock from "useShopOrientationLock" /* 18355 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const CollectiblesShopV22 = tmp(18356);
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
