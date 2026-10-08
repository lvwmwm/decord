// Module ID: 15505
// Function ID: 15506
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [5079, 7966, 558, 576, 504, 14520, 11262, 1126, 2955, 2]
// Exports: onValueChange

// Module 15505 (DisplayNameStylesAccessibilitySetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import _modDef2955 from "module_2955" /* 2955 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14520 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useValue() {
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
}) : (function useValue() {
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
    return intl.string(_modDef2955["2gFUEw"]);
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
