// Module ID: 14395
// Function ID: 108616
// Name: route
// Dependencies: []

// Module 14395 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    return "";
  },
  parent: null,
  usePredicate: require(dependencyMap[2]).useStaffOrDeveloperSettingPredicate,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;
