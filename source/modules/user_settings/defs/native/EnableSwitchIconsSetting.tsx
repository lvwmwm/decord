// Module ID: 14293
// Function ID: 109734
// Name: useEnableSwitchIconsSettingValue
// Dependencies: [4122, 7751, 566, 1324, 10127, 1212, 13423, 2]
// Exports: useEnableSwitchIconsSettingValue

// Module 14293 (useEnableSwitchIconsSettingValue)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function useEnableSwitchIconsSettingValue() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.isSwitchIconsEnabled);
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["S3z+pV"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: require("setFontSize").setSwitchIconsEnabled,
  usePredicate: function useShowSwitchIconsSetting() {
    return importDefault(1324)("SettingsAccessibilityScreen");
  },
  hasIcon: true
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default createToggle;
export { useEnableSwitchIconsSettingValue };
