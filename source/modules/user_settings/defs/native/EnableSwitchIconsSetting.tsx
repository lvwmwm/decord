// Module ID: 14129
// Function ID: 107255
// Name: useEnableSwitchIconsSettingValue
// Dependencies: []
// Exports: useEnableSwitchIconsSettingValue

// Module 14129 (useEnableSwitchIconsSettingValue)
function useEnableSwitchIconsSettingValue() {
  const items = [closure_3];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.S3z+pV);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: arg1(dependencyMap[6]).setSwitchIconsEnabled,
  usePredicate: function useShowSwitchIconsSetting() {
    return importDefault(dependencyMap[3])("SettingsAccessibilityScreen");
  },
  hasIcon: true
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default toggle;
export { useEnableSwitchIconsSettingValue };
