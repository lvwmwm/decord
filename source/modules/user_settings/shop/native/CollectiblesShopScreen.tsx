// Module ID: 14346
// Function ID: 108322
// Name: CollectiblesShopScreen
// Dependencies: []
// Exports: default

// Module 14346 (CollectiblesShopScreen)
importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).CollectiblesMobileShopScreen;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = arg1(dependencyMap[3]);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = arg1(dependencyMap[4]).useShopOrientationLock();
  const obj2 = arg1(dependencyMap[4]);
  const giftCardMobileConsumptionHalfsheet = arg1(dependencyMap[5]).useGiftCardMobileConsumptionHalfsheet();
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
    analyticsSource = importDefault(dependencyMap[7]).COLLECTIBLES_SHOP;
  }
  obj.analyticsSource = analyticsSource;
  obj.screen = screen;
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (null != params3) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj.onNavigateAway = onNavigateAway;
  return jsx(arg1(dependencyMap[6]).CollectiblesShopV2, obj);
};
