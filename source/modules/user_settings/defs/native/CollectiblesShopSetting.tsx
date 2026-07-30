// Module ID: 14597
// Function ID: 14598
// Name: route
// Dependencies: [676, 10116, 1236, 11311, 14598, 5797, 5535, 2]

// Module 14597 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.pWG4ze);
  },
  parent: null,
  IconComponent: require("ShopIcon").ShopIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(5797);
      obj = { analyticsLocations: null, analyticsSource: null };
      const items = [callback2(5535).USER_SETTINGS];
      obj[0] = items;
      obj[1] = callback2(5535).USER_SETTINGS;
      const result = obj.openCollectiblesShopMobile(obj);
      return false;
    };
  }
};
obj = {
  route: require("ME").UserSettingsSections.COLLECTIBLES_SHOP,
  getComponent() {
    return require(14598) /* CollectiblesShopScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;
