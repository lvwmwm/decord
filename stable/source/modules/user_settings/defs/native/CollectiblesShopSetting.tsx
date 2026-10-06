// Module ID: 15405
// Function ID: 15406
// Name: CollectiblesShopSetting
// Dependencies: [1086, 10874, 1127, 11506, 15406, 6965, 6604, 2]

// Module 15405 (CollectiblesShopSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6604 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6965 */;
import ShopIcon from "ShopIcon" /* 11506 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.pWG4ze);
  },
  parent: null,
  IconComponent: ShopIcon.ShopIcon,
  screen: {
    route: UserSettingsSections.COLLECTIBLES_SHOP,
    getComponent() {
      return require("CollectiblesShopScreen").default;
    }
  },
  usePreNavigationAction() {
    return () => {
      let items;
      const obj = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.USER_SETTINGS };
      const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
      items = [];
      CollectiblesActionCreators;
      items[0] = AnalyticsLocationDefault.USER_SETTINGS;
      const result = openCollectiblesShopMobile(obj);
      return false;
    };
  }
};
const route = SettingBuilders.createRoute(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;
