// Module ID: 15087
// Function ID: 15088
// Name: AndroidMobileOverlaySetting
// Dependencies: [9671, 7645, 558, 576, 504, 1126, 11142, 9684, 2]

// Module 15087 (AndroidMobileOverlaySetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import MobileVoiceOverlayStore2 from "MobileVoiceOverlayStore" /* 9671 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 9684 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const MobileVoiceOverlayStore = MobileVoiceOverlayStore2;

let tmp;
const get_initialized = tmp(504);
const isMobileOverlaySupported = MobileVoiceOverlayStore2.isMobileOverlaySupported;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let enabled;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MobileVoiceOverlayStore];
    const fn = function s() {
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
}) : (() => {
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
