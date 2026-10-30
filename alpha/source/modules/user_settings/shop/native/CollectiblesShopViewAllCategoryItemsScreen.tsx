// Module ID: 17826
// Function ID: 17827
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 7158, 1498, 17827, 2]
// Exports: default

// Module 17826 (CollectiblesShopViewAllCategoryItemsScreen)
import Fragment from "Fragment" /* 21 */;
import useNavigation from "useNavigation" /* 1498 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7158 */;
import CollectiblesShopViewAllCategoryItemsDefault from "CollectiblesShopViewAllCategoryItems" /* 17827 */;
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
