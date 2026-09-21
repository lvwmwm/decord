// Module ID: 15684
// Function ID: 15685
// Name: EnableSwitchIconsSetting
// Dependencies: [4748, 8233, 504, 11725, 1115, 14717, 2]
// Exports: useEnableSwitchIconsSettingValue

// Module 15684 (EnableSwitchIconsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

require = fn;
function useEnableSwitchIconsSettingValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
const SettingBuilders = fn(11725);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["S3z+pV"]);
  },
  parent: fn(8233).MobileUserSettings.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: fn(14717).setSwitchIconsEnabled,
  hasIcon: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default toggle;
export { useEnableSwitchIconsSettingValue };
