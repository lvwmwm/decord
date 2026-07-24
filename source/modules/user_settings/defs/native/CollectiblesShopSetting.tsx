// Module ID: 14520
// Function ID: 110868
// Name: route
// Dependencies: [653, 10127, 1212, 11290, 14521, 6773, 5482, 2]

// Module 14520 (route)
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
    return require(14521) /* CollectiblesShopScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;
