// Module ID: 15683
// Function ID: 15684
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4780, 8265, 504, 14748, 11754, 1115, 2872, 2]
// Exports: onValueChange, useValue

// Module 15683 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import _modDef2872 from "module_2872" /* 2872 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14748 */;
import AccessibilityStore from "AccessibilityStore" /* 4780 */;

require = fn;
function useValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11754);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2872["2gFUEw"]);
  },
  parent: fn(8265).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };
