// Module ID: 15679
// Function ID: 15680
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4782, 8270, 558, 568, 504, 14758, 11630, 1119, 2876, 2]
// Exports: onValueChange

// Module 15679 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import _modDef2876 from "module_2876" /* 2876 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14758 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

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
const SettingBuilders = fn(11630);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2876["2gFUEw"]);
  },
  parent: fn(8270).MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export const useValue = tmp2;
export { onValueChange };
