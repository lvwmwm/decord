// Module ID: 17016
// Function ID: 17017
// Name: CollectiblesShopSetting
// Dependencies: [1087, 11155, 1128, 12051, 17017, 7626, 7255, 2]

// Module 17016 (CollectiblesShopSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7255 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7626 */;
import ShopIcon from "ShopIcon" /* 12051 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
