// Module ID: 16831
// Function ID: 16832
// Name: SyncProfileColorsSetting
// Dependencies: [4914, 8712, 504, 11942, 1112, 15655, 2]

// Module 16831 (SyncProfileColorsSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15655 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
