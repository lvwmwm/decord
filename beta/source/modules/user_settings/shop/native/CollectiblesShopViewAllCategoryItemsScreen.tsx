// Module ID: 16172
// Function ID: 16173
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 7271, 1484, 16173, 2]
// Exports: default

// Module 16172 (CollectiblesShopViewAllCategoryItemsScreen)
import useNavigation from "useNavigation" /* 1484 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7271 */;
import CollectiblesShopViewAllCategoryItemsDefault from "CollectiblesShopViewAllCategoryItems" /* 16173 */;
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
