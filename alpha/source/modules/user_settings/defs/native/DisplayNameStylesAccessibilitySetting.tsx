// Module ID: 16970
// Function ID: 16971
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [5013, 9513, 504, 15789, 11914, 1112, 3302, 2]
// Exports: onValueChange, useValue

// Module 16970 (DisplayNameStylesAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import _modDef3302 from "module_3302" /* 3302 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15789 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
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
    return intl.string(_modDef3302["2gFUEw"]);
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
