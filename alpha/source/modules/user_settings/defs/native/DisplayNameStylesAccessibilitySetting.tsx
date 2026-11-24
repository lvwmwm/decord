// Module ID: 16849
// Function ID: 16850
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4918, 9414, 504, 15668, 11815, 1112, 3250, 2]
// Exports: onValueChange, useValue

// Module 16849 (DisplayNameStylesAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import _modDef3250 from "module_3250" /* 3250 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15668 */;
import AccessibilityStore from "AccessibilityStore" /* 4918 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
import size from "module_2" /* 2 */;

function useValue() {
  const items = [AccessibilityStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const obj = AccessibilityActionCreators;
  const result = obj.setDisplayNameStylesEnabled(enabled);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3250["2gFUEw"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };
