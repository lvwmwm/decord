// Module ID: 14792
// Function ID: 14793
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 6818, 1480, 14793, 2]
// Exports: default

// Module 14792 (CollectiblesShopViewAllCategoryItemsScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(6818);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1480).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1480);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(14793), {});
};
