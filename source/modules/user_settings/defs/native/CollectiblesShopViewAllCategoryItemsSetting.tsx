// Module ID: 14571
// Function ID: 111224
// Name: route
// Dependencies: [653, 10059, 13808, 14572, 2]

// Module 14571 (route)
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
    return require(14572) /* CollectiblesShopViewAllCategoryItemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("useStaffOrDeveloperSettingPredicate").fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;
