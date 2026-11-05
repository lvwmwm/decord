// Module ID: 17677
// Function ID: 17678
// Name: EnableSwitchIconsSetting
// Dependencies: [5144, 8578, 504, 11737, 1113, 16528, 2]
// Exports: useEnableSwitchIconsSettingValue

// Module 17677 (EnableSwitchIconsSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16528 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
import size from "module_2" /* 2 */;

function useEnableSwitchIconsSettingValue() {
  let isSwitchIconsEnabled;
  const items = [AccessibilityStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["S3z+pV"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: AccessibilityActionCreators.setSwitchIconsEnabled,
  hasIcon: true
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default toggle;
export { useEnableSwitchIconsSettingValue };
