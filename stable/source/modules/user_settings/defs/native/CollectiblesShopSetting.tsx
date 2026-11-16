// Module ID: 18188
// Function ID: 18189
// Name: CollectiblesShopSetting
// Dependencies: [1072, 11717, 1113, 12703, 18189, 7828, 7445, 2]

// Module 18188 (CollectiblesShopSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7445 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7828 */;
import ShopIcon from "ShopIcon" /* 12703 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
