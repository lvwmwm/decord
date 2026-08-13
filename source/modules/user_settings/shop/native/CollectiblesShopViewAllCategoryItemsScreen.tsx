// Module ID: 14941
// Function ID: 14942
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 6925, 1499, 14942, 2]
// Exports: default

// Module 14941 (CollectiblesShopViewAllCategoryItemsScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(6925);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1499).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1499);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(14942), {});
};
