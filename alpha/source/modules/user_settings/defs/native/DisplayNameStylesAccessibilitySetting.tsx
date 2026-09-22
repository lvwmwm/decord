// Module ID: 15692
// Function ID: 15693
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4749, 8237, 504, 14723, 11729, 1115, 2872, 2]
// Exports: onValueChange, useValue

// Module 15692 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import _modDef2872 from "module_2872" /* 2872 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14723 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

require = fn;
function useValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11729);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2872["2gFUEw"]);
  },
  parent: fn(8237).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };
