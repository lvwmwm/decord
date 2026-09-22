// Module ID: 15500
// Function ID: 15501
// Name: SyncProfileColorsSetting
// Dependencies: [4628, 8079, 504, 11605, 1114, 14526, 2]

// Module 15500 (SyncProfileColorsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
const SettingBuilders = fn(11605);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sSY+mD"]);
  },
  parent: fn(8079).MobileUserSettings.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    const items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  },
  onValueChange: fn(14526).toggleSyncProfileThemeWithUserTheme
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default toggle;
