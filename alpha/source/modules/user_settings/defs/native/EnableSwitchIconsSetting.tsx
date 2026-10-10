// Module ID: 15684
// Function ID: 15685
// Name: EnableSwitchIconsSetting
// Dependencies: [5081, 7992, 558, 576, 504, 10663, 1126, 14670, 2]

// Module 15684 (EnableSwitchIconsSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14670 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEnableSwitchIconsSettingValue() {
  let isSwitchIconsEnabled;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
      return isSwitchIconsEnabled.isSwitchIconsEnabled;
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
}) : (function useEnableSwitchIconsSettingValue() {
  let isSwitchIconsEnabled;
  const items = [AccessibilityStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["S3z+pV"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange: AccessibilityActionCreators.setSwitchIconsEnabled,
  hasIcon: true
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default toggle;
export const useEnableSwitchIconsSettingValue = tmp2;
