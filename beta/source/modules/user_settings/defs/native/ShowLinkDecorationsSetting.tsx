// Module ID: 15683
// Function ID: 15684
// Name: ShowLinkDecorationsSetting
// Dependencies: [4748, 8233, 504, 14717, 11725, 1115, 2]
// Exports: onShowLinkDecorationsValueChange, useShowLinkDecorationsSettingValue

// Module 15683 (ShowLinkDecorationsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14717 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

require = fn;
function useShowLinkDecorationsSettingValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = AccessibilityActionCreators.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
const SettingBuilders = fn(11725);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OLZFB8);
  },
  parent: fn(8233).MobileUserSettings.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default toggle;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };
