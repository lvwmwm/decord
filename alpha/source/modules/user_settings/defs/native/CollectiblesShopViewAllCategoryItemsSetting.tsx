// Module ID: 18133
// Function ID: 18134
// Name: CollectiblesShopViewAllCategoryItemsSetting
// Dependencies: [1072, 11729, 16993, 18134, 2]

// Module 18133 (CollectiblesShopViewAllCategoryItemsSetting)
import Constants from "Constants" /* 1072 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16993 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "";
  },
  parent: null,
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
    getComponent() {
      return require("CollectiblesShopViewAllCategoryItemsScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;
