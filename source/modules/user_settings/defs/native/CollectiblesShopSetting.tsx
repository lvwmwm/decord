// Module ID: 14345
// Function ID: 108317
// Name: route
// Dependencies: []

// Module 14345 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.pWG4ze);
  },
  parent: null,
  IconComponent: require(dependencyMap[3]).ShopIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(closure_2[5]);
      obj = {};
      const items = [callback2(closure_2[6]).USER_SETTINGS];
      obj.analyticsLocations = items;
      obj.analyticsSource = callback2(closure_2[6]).USER_SETTINGS;
      const result = obj.openCollectiblesShopMobile(obj);
      return false;
    };
  }
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.COLLECTIBLES_SHOP,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;
