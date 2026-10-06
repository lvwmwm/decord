// Module ID: 9445
// Function ID: 9446
// Name: UserSettingsVoiceUtils
// Dependencies: [1999, 1086, 9081, 9446, 558, 576, 504, 2]
// Exports: getSelectedNoiseSuppressionOption, handleAutomaticGainControlChange, handleEchoCancellationChange, handleNoiseSuppressionChange

// Module 9445 (UserSettingsVoiceUtils)
import react from "react" /* 576 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9081 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 9446 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import Constants from "Constants" /* 1086 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const get_initialized = tmp(504);
({ AnalyticsPages: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const NoiseSuppressionOpt = { NONE: "NONE", STANDARD: "STANDARD", KRISP: "KRISP" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function o() {
      let tmp4;
      const noiseSuppression = MediaEngineStore.getNoiseSuppression();
      const noiseCancellation = MediaEngineStore.getNoiseCancellation();
      const obj = NoiseCancellationUtils;
      if (noiseCancellation) {
        tmp4 = obj.getNoiseCancellationDeferredToSystem(MediaEngineStore) ? tmp3.NONE : tmp3.KRISP;
      } else {
        tmp4 = noiseSuppression ? tmp3.STANDARD : tmp3.NONE;
      }
      return tmp4;
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
  let obj = get_initialized;
  const items = [MediaEngineStore];
  return obj.useStateFromStores(items, () => {
    let tmp4;
    const noiseSuppression = MediaEngineStore.getNoiseSuppression();
    const noiseCancellation = MediaEngineStore.getNoiseCancellation();
    const obj = NoiseCancellationUtils;
    if (noiseCancellation) {
      tmp4 = obj.getNoiseCancellationDeferredToSystem(MediaEngineStore) ? tmp3.NONE : tmp3.KRISP;
    } else {
      tmp4 = noiseSuppression ? tmp3.STANDARD : tmp3.NONE;
    }
    return tmp4;
  });
});
function getSelectedNoiseSuppressionOption(MediaEngineStore) {
  let tmp4;
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  const noiseSuppression = obj.getNoiseSuppression();
  const noiseCancellation = obj.getNoiseCancellation();
  const obj2 = NoiseCancellationUtils;
  if (noiseCancellation) {
    tmp4 = obj2.getNoiseCancellationDeferredToSystem(obj) ? tmp3.NONE : tmp3.KRISP;
  } else {
    tmp4 = noiseSuppression ? tmp3.STANDARD : tmp3.NONE;
  }
  return tmp4;
}
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceUtils.tsx");

export const handleAutomaticGainControlChange = function handleAutomaticGainControlChange(arg0) {
  const obj = AudioActionCreatorsDefault;
  const obj2 = { page: constants.USER_SETTINGS, section: hasOwnProperty.SETTINGS_VOICE_AND_VIDEO };
  const result = obj.setAutomaticGainControl(arg0, obj2);
};
export const handleEchoCancellationChange = function handleEchoCancellationChange(arg0) {
  const obj = AudioActionCreatorsDefault;
  const obj2 = { page: constants.USER_SETTINGS, section: hasOwnProperty.SETTINGS_VOICE_AND_VIDEO };
  obj.setEchoCancellation(arg0, obj2);
};
export const handleNoiseSuppressionChange = function handleNoiseSuppressionChange(arg0) {
  let KRISP;
  let STANDARD;
  let obj;
  ({ KRISP, STANDARD } = obj);
  obj = AudioActionCreatorsDefault;
  const obj2 = { page: constants.USER_SETTINGS, section: hasOwnProperty.SETTINGS_VOICE_AND_VIDEO };
  obj.setNoiseCancellation(arg0 === KRISP, obj2);
  const obj3 = AudioActionCreatorsDefault;
  const obj4 = { page: constants.USER_SETTINGS, section: hasOwnProperty.SETTINGS_VOICE_AND_VIDEO };
  obj3.setNoiseSuppression(arg0 === STANDARD, obj4);
};
export { NoiseSuppressionOpt };
export { getSelectedNoiseSuppressionOption };
export const useSelectedNoiseSuppressionOption = tmp3;
