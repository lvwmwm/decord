// Module ID: 17405
// Function ID: 17406
// Name: EnableSwitchIconsSetting
// Dependencies: [5015, 8432, 504, 11540, 1113, 16270, 2]
// Exports: useEnableSwitchIconsSettingValue

// Module 17405 (EnableSwitchIconsSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16270 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
