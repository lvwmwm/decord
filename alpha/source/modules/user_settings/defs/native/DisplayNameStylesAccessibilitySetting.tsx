// Module ID: 17646
// Function ID: 17647
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [5142, 8573, 504, 16515, 11729, 1113, 3059, 2]
// Exports: onValueChange, useValue

// Module 17646 (DisplayNameStylesAccessibilitySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import _modDef3059 from "module_3059" /* 3059 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16515 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
    return intl.string(_modDef3059["2gFUEw"]);
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
