// Module ID: 17229
// Function ID: 17230
// Name: CollectiblesShopSetting
// Dependencies: [1084, 11212, 1125, 12022, 17230, 7650, 7280, 2]

// Module 17229 (CollectiblesShopSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7280 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7650 */;
import ShopIcon from "ShopIcon" /* 12022 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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
