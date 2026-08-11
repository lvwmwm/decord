// Module ID: 14874
// Function ID: 14875
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 6880, 1499, 14875, 2]
// Exports: default

// Module 14874 (CollectiblesShopViewAllCategoryItemsScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(6880);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1499).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1499);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(14875), {});
};
