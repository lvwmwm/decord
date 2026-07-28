// Module ID: 14577
// Function ID: 111178
// Name: CollectiblesShopScreen
// Dependencies: [31, 655, 33, 6309, 14578, 12464, 14579, 5517, 2]
// Exports: default

// Module 14577 (CollectiblesShopScreen)
import "result";
import { CollectiblesMobileShopScreen as closure_3 } from "items";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = require(6309) /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = require(14578) /* useShopOrientationLock */.useShopOrientationLock();
  const obj2 = require(14578) /* useShopOrientationLock */;
  const giftCardMobileConsumptionHalfsheet = require(12464) /* useGiftCardMobileConsumptionHalfsheet */.useGiftCardMobileConsumptionHalfsheet();
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
    analyticsSource = importDefault(5517).COLLECTIBLES_SHOP;
  }
  obj.analyticsSource = analyticsSource;
  obj.screen = screen;
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (null != params3) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj.onNavigateAway = onNavigateAway;
  return jsx(require(14579) /* _createForOfIteratorHelperLoose */.CollectiblesShopV2, {});
};
