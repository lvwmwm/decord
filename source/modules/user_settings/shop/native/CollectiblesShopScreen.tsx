// Module ID: 15633
// Function ID: 15634
// Name: CollectiblesShopScreen
// Dependencies: [19, 675, 21, 7168, 15634, 6257, 15635, 5981, 2]
// Exports: default

// Module 15633 (CollectiblesShopScreen)
import noopAll from "noop" /* 19 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5981 */;
import useGiftCardMobileConsumptionHalfsheet from "useGiftCardMobileConsumptionHalfsheet" /* 6257 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7168 */;
import useShopOrientationLock from "useShopOrientationLock" /* 15634 */;
import CollectiblesShopInternal from "CollectiblesShopInternal" /* 15635 */;
import { CollectiblesMobileShopScreen as closure_3 } from "items" /* 675 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = useShopOrientationLock.useShopOrientationLock();
  const obj2 = useShopOrientationLock;
  const tmp = require;
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
    analyticsSource = QUICK_SWITCHERDefault.COLLECTIBLES_SHOP;
  }
  obj = { analyticsSource, screen, onNavigateAway: null };
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (params3 != null) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj[2] = onNavigateAway;
  return jsx(CollectiblesShopInternal.CollectiblesShopV2, { analyticsSource, screen, onNavigateAway: null });
};
