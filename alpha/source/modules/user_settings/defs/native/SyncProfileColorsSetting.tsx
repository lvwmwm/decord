// Module ID: 15513
// Function ID: 15514
// Name: SyncProfileColorsSetting
// Dependencies: [5079, 7966, 558, 576, 504, 11262, 1126, 14520, 2]

// Module 15513 (SyncProfileColorsSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14520 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useProfileColorsSettingValue() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return AccessibilityStore.syncProfileThemeWithUserTheme;
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
}) : (function useProfileColorsSettingValue() {
  const items = [AccessibilityStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["sSY+mD"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange: AccessibilityActionCreators.toggleSyncProfileThemeWithUserTheme
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default toggle;
