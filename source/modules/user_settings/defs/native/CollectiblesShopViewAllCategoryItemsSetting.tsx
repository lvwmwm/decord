// Module ID: 14985
// Function ID: 14986
// Name: route
// Dependencies: [676, 10669, 14199, 14986, 2]

// Module 14985 (route)
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
    return require(14986) /* CollectiblesShopViewAllCategoryItemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("useStaffOrDeveloperSettingPredicate").fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;
