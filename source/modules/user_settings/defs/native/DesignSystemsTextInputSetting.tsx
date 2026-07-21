// Module ID: 14326
// Function ID: 108180
// Name: route
// Dependencies: [2113929237, 1509949461, 1493172253, 201326621, 1828716565]

// Module 14326 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    return "Text Input";
  },
  parent: require(dependencyMap[0]).MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.DESIGN_SYSTEM_TEXT_INPUT,
  getComponent() {
    return require(dependencyMap[3]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextInputSetting.tsx");

export default route;
