// Module ID: 14946
// Function ID: 14947
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 6946, 1499, 14947, 2]
// Exports: default

// Module 14946 (CollectiblesShopViewAllCategoryItemsScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(6946);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1499).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1499);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(14947), {});
};
