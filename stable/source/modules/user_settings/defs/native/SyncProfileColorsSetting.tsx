// Module ID: 17765
// Function ID: 17766
// Name: SyncProfileColorsSetting
// Dependencies: [5171, 8536, 504, 11717, 1113, 16612, 2]

// Module 17765 (SyncProfileColorsSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16612 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["sSY+mD"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    const items = [AccessibilityStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  },
  onValueChange: AccessibilityActionCreators.toggleSyncProfileThemeWithUserTheme
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default toggle;
