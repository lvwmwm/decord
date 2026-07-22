// Module ID: 14396
// Function ID: 108619
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: []
// Exports: default

// Module 14396 (CollectiblesShopViewAllCategoryItemsScreen)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = arg1(dependencyMap[2]);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = arg1(dependencyMap[3]).useStackNavigation();
  const arg1 = stackNavigation;
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = arg1(dependencyMap[3]);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(dependencyMap[4]), obj);
};
