// Module ID: 16123
// Function ID: 16124
// Name: CollectiblesShopSetting
// Dependencies: [1078, 11630, 1119, 12314, 16124, 7820, 7461, 2]

// Module 16123 (CollectiblesShopSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7461 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7820 */;
import ShopIcon from "ShopIcon" /* 12314 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.pWG4ze);
  },
  parent: null,
  IconComponent: ShopIcon.ShopIcon,
  screen: {
    route: Constants.UserSettingsSections.COLLECTIBLES_SHOP,
    getComponent() {
      return require("CollectiblesShopScreen").default;
    }
  },
  usePreNavigationAction() {
    return () => {
      const obj2 = { analyticsLocations: null, analyticsSource: null };
      const items = [AnalyticsLocationDefault.USER_SETTINGS];
      obj2.analyticsLocations = items;
      obj2.analyticsSource = AnalyticsLocationDefault.USER_SETTINGS;
      const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj2);
      return false;
    };
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;
