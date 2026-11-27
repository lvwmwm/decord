// Module ID: 17488
// Function ID: 17489
// Name: CollectiblesShopSetting
// Dependencies: [1071, 11970, 1112, 13110, 17489, 6310, 6380, 2]

// Module 17488 (CollectiblesShopSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6310 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import ShopIcon from "ShopIcon" /* 13110 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
