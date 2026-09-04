// Module ID: 15768
// Function ID: 15769
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 6934, 1498, 15769, 2]
// Exports: default

// Module 15768 (CollectiblesShopViewAllCategoryItemsScreen)
import _modDef15769 from "module_15769" /* 15769 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(6934);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1498).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1498);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(_modDef15769, {});
};
