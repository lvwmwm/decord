// Module ID: 17333
// Function ID: 17334
// Name: CollectiblesShopViewAllCategoryItemsSetting
// Dependencies: [1071, 11937, 16144, 17334, 2]

// Module 17333 (CollectiblesShopViewAllCategoryItemsSetting)
import Constants from "Constants" /* 1071 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16144 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
