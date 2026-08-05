// Module ID: 14737
// Function ID: 14738
// Name: route
// Dependencies: [676, 10333, 13966, 14738, 2]

// Module 14737 (route)
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
    return require(14738) /* CollectiblesShopViewAllCategoryItemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("useStaffOrDeveloperSettingPredicate").fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;
