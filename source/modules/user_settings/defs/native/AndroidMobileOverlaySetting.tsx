// Module ID: 14019
// Function ID: 106609
// Name: toggle
// Dependencies: []

// Module 14019 (toggle)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.9CSZJm);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: importDefault(dependencyMap[5]).setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.Wfoivk);
  },
  usePredicate: arg1(dependencyMap[0]).isMobileOverlaySupported
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default toggle;
