// Module ID: 14397
// Function ID: 108624
// Name: route
// Dependencies: []

// Module 14397 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.5b3FNI);
  },
  parent: require(dependencyMap[0]).MobileSetting.DATA_AND_PRIVACY,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;
