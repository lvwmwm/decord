// Module ID: 15669
// Function ID: 15670
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4750, 8238, 558, 568, 504, 14720, 11594, 1119, 2876, 2]
// Exports: onValueChange

// Module 15669 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import _modDef2876 from "module_2876" /* 2876 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14720 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;

require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
      return AccessibilityStore.displayNameStylesEnabled;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
});
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11594);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2876["2gFUEw"]);
  },
  parent: fn(8238).MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export const useValue = tmp2;
export { onValueChange };
