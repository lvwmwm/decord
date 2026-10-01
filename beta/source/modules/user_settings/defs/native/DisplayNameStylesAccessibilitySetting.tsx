// Module ID: 14956
// Function ID: 14957
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4825, 7417, 504, 13998, 11006, 1115, 2877, 2]
// Exports: onValueChange, useValue

// Module 14956 (DisplayNameStylesAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1115 */;
import _modDef2877 from "module_2877" /* 2877 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 13998 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
    return intl.string(_modDef2877["2gFUEw"]);
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
