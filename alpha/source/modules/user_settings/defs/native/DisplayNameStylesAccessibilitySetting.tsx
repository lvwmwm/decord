// Module ID: 17749
// Function ID: 17750
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [5143, 8507, 504, 16610, 11694, 1113, 3056, 2]
// Exports: onValueChange, useValue

// Module 17749 (DisplayNameStylesAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import _modDef3056 from "module_3056" /* 3056 */;
import SettingsConstants from "SettingsConstants" /* 8507 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16610 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import SettingBuilders from "SettingBuilders" /* 11694 */;
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
    return intl.string(_modDef3056["2gFUEw"]);
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
