// Module ID: 14559
// Function ID: 111092
// Name: route
// Dependencies: [653, 10127, 13796, 14560, 2]

// Module 14559 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "";
  },
  parent: null,
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
  getComponent() {
    return require(14560) /* CollectiblesShopViewAllCategoryItemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("useStaffOrDeveloperSettingPredicate").fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;
