// Module ID: 16112
// Function ID: 16113
// Name: CollectiblesShopScreen
// Dependencies: [19, 1087, 21, 558, 576, 6681, 16113, 7090, 6872, 16114, 2]

// Module 16112 (CollectiblesShopScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6681 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import useGiftCardMobileConsumptionHalfsheet from "useGiftCardMobileConsumptionHalfsheet" /* 7090 */;
import useShopOrientationLock from "useShopOrientationLock" /* 16113 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const CollectiblesShopV22 = tmp(16114);
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesShopScreen() {
  const obj = react2;
  const cResult = obj.c(4);
  const obj2 = useSettingNavigationRoute;
  const settingNavigationRoute = obj2.useSettingNavigationRoute();
  const obj3 = useShopOrientationLock;
  const shopOrientationLock = obj3.useShopOrientationLock();
  const obj4 = useGiftCardMobileConsumptionHalfsheet;
  const giftCardMobileConsumptionHalfsheet = obj4.useGiftCardMobileConsumptionHalfsheet();
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
    analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
  }
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (params3 != null) {
    onNavigateAway = params3.onNavigateAway;
  }
  if (cResult[0] === analyticsSource) {
    if (cResult[1] === onNavigateAway) {
      let tmp12;
      if (cResult[2] === screen) {
        tmp12 = cResult[3];
      }
      return tmp12;
    }
  }
  const tmp13 = jsx(CollectiblesShopV22.CollectiblesShopV2, { analyticsSource, screen, onNavigateAway });
  cResult[0] = analyticsSource;
  cResult[1] = onNavigateAway;
  cResult[2] = screen;
  cResult[3] = tmp13;
  tmp12 = tmp13;
}) : (function CollectiblesShopScreen() {
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
});
const result = size.fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default tmp3;
