// Module ID: 16645
// Function ID: 16646
// Name: AndroidMobileOverlaySetting
// Dependencies: [11646, 8364, 558, 576, 504, 1128, 11240, 11659, 2]

// Module 16645 (AndroidMobileOverlaySetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8364 */;
import MobileVoiceOverlayStore2 from "MobileVoiceOverlayStore" /* 11646 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 11659 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11240 */;
import size from "module_2" /* 2 */;

const MobileVoiceOverlayStore = MobileVoiceOverlayStore2;

let tmp;
const get_initialized = tmp(504);
const isMobileOverlaySupported = MobileVoiceOverlayStore2.isMobileOverlaySupported;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAndroidMobileOverlaySettingValue() {
  let enabled;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MobileVoiceOverlayStore];
    const fn = function o() {
      return enabled.getEnabled();
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
}) : (function useAndroidMobileOverlaySettingValue() {
  let enabled;
  const items = [MobileVoiceOverlayStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => enabled.getEnabled());
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["9CSZJm"]);
  },
  parent: MobileUserSettings.VOICE,
  useValue: tmp2,
  onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Wfoivk);
  },
  usePredicate: isMobileOverlaySupported
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default toggle;
