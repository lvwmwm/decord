// Module ID: 17045
// Function ID: 17046
// Name: SyncReducedMotionWithDeviceSetting
// Dependencies: [5005, 8365, 558, 576, 504, 15949, 11248, 1125, 2]

// Module 17045 (SyncReducedMotionWithDeviceSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15949 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useReducedMotionSyncSettingValue() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return "auto" === AccessibilityStore.rawPrefersReducedMotion;
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
}) : (function useReducedMotionSyncSettingValue() {
  const items = [AccessibilityStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => "auto" === AccessibilityStore.rawPrefersReducedMotion);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["St+DJK"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange: function onReducedMotionSyncSettingValueChange(arg0) {
    const systemPrefersReducedMotion = AccessibilityStore.systemPrefersReducedMotion;
    let str = "auto";
    const setPrefersReducedMotion = AccessibilityActionCreators.setPrefersReducedMotion;
    AccessibilityActionCreators;
    if (!arg0) {
      str = systemPrefersReducedMotion;
    }
    const result = setPrefersReducedMotion(str);
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx");

export default toggle;
