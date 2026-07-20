// Module ID: 14189
// Function ID: 107397
// Name: toggle
// Dependencies: []

// Module 14189 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.V6D0wU);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[3]).NativePhoneIntegrationEnabled.useSetting,
  onValueChange: require(dependencyMap[3]).NativePhoneIntegrationEnabled.updateSetting,
  usePredicate() {
    let enabled = importDefault(dependencyMap[4]).useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = require(dependencyMap[5]).isIOS();
      const obj2 = require(dependencyMap[5]);
    }
    return enabled;
  }
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;
