// Module ID: 17332
// Function ID: 17333
// Name: EnableSwitchIconsSetting
// Dependencies: [5010, 8424, 504, 11505, 1114, 16225, 2]
// Exports: useEnableSwitchIconsSettingValue

// Module 17332 (EnableSwitchIconsSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16225 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
