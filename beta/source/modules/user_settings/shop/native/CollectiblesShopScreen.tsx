// Module ID: 16114
// Function ID: 16115
// Name: CollectiblesShopScreen
// Dependencies: [19, 1080, 21, 558, 568, 7240, 16115, 7629, 7429, 16116, 2]

// Module 16114 (CollectiblesShopScreen)
import c from "c" /* 568 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7240 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7429 */;
import useGiftCardMobileConsumptionHalfsheet from "useGiftCardMobileConsumptionHalfsheet" /* 7629 */;
import useShopOrientationLock from "useShopOrientationLock" /* 16115 */;
import noop from "module_19" /* 19 */;

const CollectiblesShopV2 = tmp(16116);
require = fn;
const constants = fn(1080).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const shopOrientationLock = useShopOrientationLock.useShopOrientationLock();
  const giftCardMobileConsumptionHalfsheet = useGiftCardMobileConsumptionHalfsheet.useGiftCardMobileConsumptionHalfsheet();
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
      if (cResult[2] === screen) {
        let tmp12 = cResult[3];
      }
      return tmp12;
    }
  }
  const tmp13 = jsx(CollectiblesShopV2.CollectiblesShopV2, { analyticsSource, screen, onNavigateAway });
  cResult[0] = analyticsSource;
  cResult[1] = onNavigateAway;
  cResult[2] = screen;
  cResult[3] = tmp13;
  tmp12 = tmp13;
}) : (() => {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const shopOrientationLock = useShopOrientationLock.useShopOrientationLock();
  const giftCardMobileConsumptionHalfsheet = useGiftCardMobileConsumptionHalfsheet.useGiftCardMobileConsumptionHalfsheet();
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
  const obj4 = { analyticsSource, screen, onNavigateAway: null };
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (params3 != null) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj4.onNavigateAway = onNavigateAway;
  return jsx(CollectiblesShopV2.CollectiblesShopV2, { analyticsSource, screen, onNavigateAway: null });
});
