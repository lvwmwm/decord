// Module ID: 17459
// Function ID: 17460
// Name: CollectiblesShopSetting
// Dependencies: [1084, 11248, 1125, 12060, 17460, 7684, 7314, 2]

// Module 17459 (CollectiblesShopSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7314 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7684 */;
import ShopIcon from "ShopIcon" /* 12060 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
