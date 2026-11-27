// Module ID: 17031
// Function ID: 17032
// Name: ShowLinkDecorationsSetting
// Dependencies: [5044, 9556, 504, 15847, 11970, 1112, 2]
// Exports: onShowLinkDecorationsValueChange, useShowLinkDecorationsSettingValue

// Module 17031 (ShowLinkDecorationsSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15847 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

function useShowLinkDecorationsSettingValue() {
  const items = [AccessibilityStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => AccessibilityStore.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const obj = AccessibilityActionCreators;
  const result = obj.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.OLZFB8);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default toggle;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };
