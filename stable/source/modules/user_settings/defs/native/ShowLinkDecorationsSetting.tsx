// Module ID: 15496
// Function ID: 15497
// Name: ShowLinkDecorationsSetting
// Dependencies: [4628, 8079, 504, 14526, 11605, 1114, 2]
// Exports: onShowLinkDecorationsValueChange, useShowLinkDecorationsSettingValue

// Module 15496 (ShowLinkDecorationsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14526 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
function useShowLinkDecorationsSettingValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = AccessibilityActionCreators.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
const SettingBuilders = fn(11605);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OLZFB8);
  },
  parent: fn(8079).MobileUserSettings.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default toggle;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };
