// Module ID: 18034
// Function ID: 18035
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [5307, 9202, 504, 16891, 12408, 1113, 3125, 2]
// Exports: onValueChange, useValue

// Module 18034 (DisplayNameStylesAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import _modDef3125 from "module_3125" /* 3125 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16891 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import SettingBuilders from "SettingBuilders" /* 12408 */;
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
    return intl.string(_modDef3125["2gFUEw"]);
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
