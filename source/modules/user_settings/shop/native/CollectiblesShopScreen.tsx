// Module ID: 14471
// Function ID: 110550
// Name: CollectiblesShopScreen
// Dependencies: [31, 655, 33, 6653, 14472, 5799, 14473, 5484, 2]
// Exports: default

// Module 14471 (CollectiblesShopScreen)
import "result";
import { CollectiblesMobileShopScreen as closure_3 } from "items";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = require(6653) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = require(14472) /* useShopOrientationLock */.useShopOrientationLock();
  const obj2 = require(14472) /* useShopOrientationLock */;
  const giftCardMobileConsumptionHalfsheet = require(5799) /* useGiftCardMobileConsumptionHalfsheet */.useGiftCardMobileConsumptionHalfsheet();
  const params = settingNavigationRoute.params;
  let screen;
  if (null != params) {
    screen = params.screen;
  }
  if (null == screen) {
    screen = constants.FEATURED_PAGE;
  }
  obj = {};
  const params2 = settingNavigationRoute.params;
  let analyticsSource;
  if (null != params2) {
    analyticsSource = params2.analyticsSource;
  }
  if (null == analyticsSource) {
    analyticsSource = importDefault(5484).COLLECTIBLES_SHOP;
  }
  obj.analyticsSource = analyticsSource;
  obj.screen = screen;
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (null != params3) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj.onNavigateAway = onNavigateAway;
  return jsx(require(14473) /* _createForOfIteratorHelperLoose */.CollectiblesShopV2, {});
};
