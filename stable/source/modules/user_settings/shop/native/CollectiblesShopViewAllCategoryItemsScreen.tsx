// Module ID: 15937
// Function ID: 15938
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 7097, 1483, 15938, 2]
// Exports: default

// Module 15937 (CollectiblesShopViewAllCategoryItemsScreen)
import useNavigation from "useNavigation" /* 1483 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7097 */;
import CollectiblesShopViewAllCategoryItemsDefault from "CollectiblesShopViewAllCategoryItems" /* 15938 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  const obj3 = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(CollectiblesShopViewAllCategoryItemsDefault, {});
};
