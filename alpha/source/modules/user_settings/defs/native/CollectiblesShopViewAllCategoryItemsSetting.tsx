// Module ID: 16944
// Function ID: 16945
// Name: CollectiblesShopViewAllCategoryItemsSetting
// Dependencies: [1087, 11065, 15884, 16945, 2]

// Module 16944 (CollectiblesShopViewAllCategoryItemsSetting)
import Constants from "Constants" /* 1087 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15884 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
