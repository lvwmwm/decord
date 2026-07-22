// Module ID: 10713
// Function ID: 83395
// Name: getSelectedNoiseSuppressionOption
// Dependencies: []
// Exports: handleAutomaticGainControlChange, handleEchoCancellationChange, handleNoiseSuppressionChange, useSelectedNoiseSuppressionOption

// Module 10713 (getSelectedNoiseSuppressionOption)
function getSelectedNoiseSuppressionOption() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_3;
  }
  const noiseSuppression = obj.getNoiseSuppression();
  const noiseCancellation = obj.getNoiseCancellation();
  if (noiseCancellation) {
    obj2.getNoiseCancellationDeferredToSystem(obj) ? tmp3.NONE : tmp3.KRISP;
  } else {
    return noiseSuppression ? tmp3.STANDARD : tmp3.NONE;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
({ AnalyticsPages: closure_4, AnalyticsSections: closure_5 } = arg1(dependencyMap[1]));
const obj = { NONE: "NONE", STANDARD: "STANDARD", KRISP: "KRISP" };
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceUtils.tsx");

export const handleAutomaticGainControlChange = function handleAutomaticGainControlChange(arg0) {
  let obj = importDefault(dependencyMap[2]);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  const result = obj.setAutomaticGainControl(arg0, obj);
};
export const handleEchoCancellationChange = function handleEchoCancellationChange(echoCancellation) {
  let obj = importDefault(dependencyMap[2]);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  obj.setEchoCancellation(echoCancellation, obj);
};
export const handleNoiseSuppressionChange = function handleNoiseSuppressionChange(arg0) {
  let KRISP;
  let STANDARD;
  ({ KRISP, STANDARD } = obj);
  let obj = importDefault(dependencyMap[2]);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  obj.setNoiseCancellation(arg0 === KRISP, obj);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  importDefault(dependencyMap[2]).setNoiseSuppression(arg0 === STANDARD, obj);
};
export const NoiseSuppressionOpt = obj;
export { getSelectedNoiseSuppressionOption };
export const useSelectedNoiseSuppressionOption = function useSelectedNoiseSuppressionOption() {
  const items = [closure_3];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => callback(closure_3));
};
