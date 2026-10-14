// Module ID: 15074
// Function ID: 15075
// Name: NoiseSuppressionSetting
// Dependencies: [1999, 7634, 558, 576, 504, 9673, 11129, 1126, 2]

// Module 15074 (NoiseSuppressionSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 9673 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let noiseSuppression;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function n() {
      return noiseSuppression.getNoiseSuppression();
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
  let noiseSuppression;
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => noiseSuppression.getNoiseSuppression());
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let noiseCancellationSupported;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function n() {
      return !noiseCancellationSupported.isNoiseCancellationSupported();
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
  let noiseCancellationSupported;
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => !noiseCancellationSupported.isNoiseCancellationSupported());
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.t8Qhib);
  },
  parent: MobileUserSettings.VOICE,
  useValue: tmp2,
  onValueChange: function onNoiseSuppressionSettingValueChange(arg0) {
    const handleNoiseSuppressionChange = UserSettingsVoiceUtils.handleNoiseSuppressionChange;
    UserSettingsVoiceUtils;
    const NoiseSuppressionOpt = UserSettingsVoiceUtils.NoiseSuppressionOpt;
    const result = handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
  },
  usePredicate: tmp3
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default toggle;
