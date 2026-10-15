// Module ID: 16781
// Function ID: 16782
// Name: CollectiblesShopSetting
// Dependencies: [1085, 10991, 1126, 11866, 16782, 7479, 7098, 2]

// Module 16781 (CollectiblesShopSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7098 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7479 */;
import ShopIcon from "ShopIcon" /* 11866 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
