// Module ID: 14758
// Function ID: 14759
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 6787, 1480, 14759, 2]
// Exports: default

// Module 14758 (CollectiblesShopViewAllCategoryItemsScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(6787);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1480).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1480);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(14759), {});
};
