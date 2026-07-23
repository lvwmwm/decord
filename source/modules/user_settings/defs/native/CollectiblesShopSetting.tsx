// Module ID: 14470
// Function ID: 110545
// Name: route
// Dependencies: [653, 10095, 1212, 11261, 14471, 6773, 5484, 2]

// Module 14470 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.pWG4ze);
  },
  parent: null,
  IconComponent: require("ShopIcon").ShopIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = outer1_0(outer1_2[5]);
      obj = {};
      const items = [outer1_1(outer1_2[6]).USER_SETTINGS];
      obj.analyticsLocations = items;
      obj.analyticsSource = outer1_1(outer1_2[6]).USER_SETTINGS;
      const result = obj.openCollectiblesShopMobile(obj);
      return false;
    };
  }
};
obj = {
  route: require("ME").UserSettingsSections.COLLECTIBLES_SHOP,
  getComponent() {
    return require(14471) /* CollectiblesShopScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;
