// Module ID: 16875
// Function ID: 16876
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4824, 8624, 504, 15574, 11897, 1113, 3147, 2]
// Exports: onValueChange, useValue

// Module 16875 (DisplayNameStylesAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import _modDef3147 from "module_3147" /* 3147 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15574 */;
import AccessibilityStore from "AccessibilityStore" /* 4824 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
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
    return intl.string(_modDef3147["2gFUEw"]);
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
