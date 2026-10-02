// Module ID: 14944
// Function ID: 14945
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4826, 7421, 558, 576, 504, 14000, 10874, 1127, 2880, 2]
// Exports: onValueChange

// Module 14944 (DisplayNameStylesAccessibilitySetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1127 */;
import _modDef2880 from "module_2880" /* 2880 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14000 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
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
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [AccessibilityStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
});
function onValueChange(enabled) {
  const obj = AccessibilityActionCreators;
  const result = obj.setDisplayNameStylesEnabled(enabled);
}
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2880["2gFUEw"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export const useValue = tmp2;
export { onValueChange };
