// Module ID: 14560
// Function ID: 111095
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [31, 33, 6653, 1456, 14561, 2]
// Exports: default

// Module 14560 (CollectiblesShopViewAllCategoryItemsScreen)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(6653);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1456).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1456);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(14561), {});
};
