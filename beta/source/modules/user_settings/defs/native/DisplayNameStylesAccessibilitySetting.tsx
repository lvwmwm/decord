// Module ID: 16823
// Function ID: 16824
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4914, 8712, 504, 15655, 11942, 1112, 3248, 2]
// Exports: onValueChange, useValue

// Module 16823 (DisplayNameStylesAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import _modDef3248 from "module_3248" /* 3248 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15655 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
    return intl.string(_modDef3248["2gFUEw"]);
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
