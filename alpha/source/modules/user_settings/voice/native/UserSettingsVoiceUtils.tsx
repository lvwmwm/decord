// Module ID: 11955
// Function ID: 11956
// Name: UserSettingsVoiceUtils
// Dependencies: [2006, 1072, 5915, 11956, 504, 2]
// Exports: getSelectedNoiseSuppressionOption, handleAutomaticGainControlChange, handleEchoCancellationChange, handleNoiseSuppressionChange, useSelectedNoiseSuppressionOption

// Module 11955 (UserSettingsVoiceUtils)
import get_initialized from "get initialized" /* 504 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5915 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 11956 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AnalyticsPages: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const NoiseSuppressionOpt = { NONE: "NONE", STANDARD: "STANDARD", KRISP: "KRISP" };
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceUtils.tsx");

export function handleAutomaticGainControlChange(arg0) {
  const obj = AudioActionCreatorsDefault;
  const obj2 = { page: constants.USER_SETTINGS, section: hasOwnProperty.SETTINGS_VOICE_AND_VIDEO };
  const result = obj.setAutomaticGainControl(arg0, obj2);
}
export function handleEchoCancellationChange(arg0) {
  const obj = AudioActionCreatorsDefault;
  const obj2 = { page: constants.USER_SETTINGS, section: hasOwnProperty.SETTINGS_VOICE_AND_VIDEO };
  obj.setEchoCancellation(arg0, obj2);
}
export function handleNoiseSuppressionChange(arg0) {
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
}
export { NoiseSuppressionOpt };
export function getSelectedNoiseSuppressionOption(MediaEngineStore) {
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
export function useSelectedNoiseSuppressionOption() {
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
}
