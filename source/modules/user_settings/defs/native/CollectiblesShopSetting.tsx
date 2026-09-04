// Module ID: 15728
// Function ID: 15729
// Name: route
// Dependencies: [673, 11400, 1233, 12070, 15729, 7474, 7122, 2]

// Module 15728 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ShopIcon from "ShopIcon" /* 12070 */;
import createToggle from "createToggle" /* 11400 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.pWG4ze);
  },
  parent: null,
  IconComponent: ShopIcon.ShopIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(7474);
      obj = { analyticsLocations: null, analyticsSource: null };
      const items = [callback2(7122).USER_SETTINGS];
      obj[0] = items;
      obj[1] = callback2(7122).USER_SETTINGS;
      const result = obj.openCollectiblesShopMobile(obj);
      return false;
    };
  }
};
obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP,
  getComponent() {
    return require(15729) /* CollectiblesShopScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = set.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;
