// Module ID: 16559
// Function ID: 16560
// Name: CollectiblesShopViewAllCategoryItemsSetting
// Dependencies: [1085, 10663, 15442, 16560, 2]

// Module 16559 (CollectiblesShopViewAllCategoryItemsSetting)
import Constants from "Constants" /* 1085 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15442 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
