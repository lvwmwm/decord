// Module ID: 15995
// Function ID: 15996
// Name: CollectiblesShopSetting
// Dependencies: [1085, 11262, 1126, 11843, 15996, 7251, 6865, 2]

// Module 15995 (CollectiblesShopSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7251 */;
import ShopIcon from "ShopIcon" /* 11843 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
