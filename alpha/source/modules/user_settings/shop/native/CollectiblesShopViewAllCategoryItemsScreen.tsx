// Module ID: 17383
// Function ID: 17384
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 7295, 1502, 17384, 2]
// Exports: default

// Module 17383 (CollectiblesShopViewAllCategoryItemsScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1502 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7295 */;
import CollectiblesShopViewAllCategoryItemsDefault from "CollectiblesShopViewAllCategoryItems" /* 17384 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  const obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const obj2 = useNavigation;
  const stackNavigation = obj2.useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = react.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  CollectiblesShopViewAllCategoryItemsDefault;
  const merged = Object.assign(settingNavigationRoute.params);
  return <tmp4 />;
};
