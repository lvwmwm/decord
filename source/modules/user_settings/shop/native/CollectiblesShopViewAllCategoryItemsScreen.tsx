// Module ID: 14635
// Function ID: 14636
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 6327, 1480, 14636, 2]
// Exports: default

// Module 14635 (CollectiblesShopViewAllCategoryItemsScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(6327);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1480).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1480);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(14636), {});
};
