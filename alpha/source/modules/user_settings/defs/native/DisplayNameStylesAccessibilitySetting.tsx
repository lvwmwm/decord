// Module ID: 16516
// Function ID: 16517
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4946, 8280, 558, 576, 504, 15512, 11111, 1128, 2918, 2]
// Exports: onValueChange

// Module 16516 (DisplayNameStylesAccessibilitySetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import _modDef2918 from "module_2918" /* 2918 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15512 */;
import AccessibilityStore from "AccessibilityStore" /* 4946 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
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
    return intl.string(_modDef2918["2gFUEw"]);
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
