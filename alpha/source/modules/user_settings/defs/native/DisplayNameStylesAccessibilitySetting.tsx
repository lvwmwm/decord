// Module ID: 16692
// Function ID: 16693
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4795, 8592, 504, 15524, 11817, 1112, 3149, 2]
// Exports: onValueChange, useValue

// Module 16692 (DisplayNameStylesAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import _modDef3149 from "module_3149" /* 3149 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15524 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
    return intl.string(_modDef3149["2gFUEw"]);
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
