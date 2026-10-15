// Module ID: 16359
// Function ID: 16360
// Name: SyncProfileColorsSetting
// Dependencies: [5140, 8210, 558, 576, 504, 10991, 1126, 15348, 2]

// Module 16359 (SyncProfileColorsSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15348 */;
import AccessibilityStore from "AccessibilityStore" /* 5140 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
