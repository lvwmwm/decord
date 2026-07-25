// Module ID: 14532
// Function ID: 111000
// Name: CollectiblesShopScreen
// Dependencies: [31, 655, 33, 6273, 14533, 12420, 14534, 5482, 2]
// Exports: default

// Module 14532 (CollectiblesShopScreen)
import "result";
import { CollectiblesMobileShopScreen as closure_3 } from "items";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = require(6273) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = require(14533) /* useShopOrientationLock */.useShopOrientationLock();
  const obj2 = require(14533) /* useShopOrientationLock */;
  const giftCardMobileConsumptionHalfsheet = require(12420) /* useGiftCardMobileConsumptionHalfsheet */.useGiftCardMobileConsumptionHalfsheet();
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
    analyticsSource = importDefault(5482).COLLECTIBLES_SHOP;
  }
  obj.analyticsSource = analyticsSource;
  obj.screen = screen;
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (null != params3) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj.onNavigateAway = onNavigateAway;
  return jsx(require(14534) /* _createForOfIteratorHelperLoose */.CollectiblesShopV2, {});
};
