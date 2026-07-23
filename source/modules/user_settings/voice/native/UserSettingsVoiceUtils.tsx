// Module ID: 10723
// Function ID: 83444
// Name: getSelectedNoiseSuppressionOption
// Dependencies: [4177, 653, 8843, 10724, 566, 2]
// Exports: handleAutomaticGainControlChange, handleEchoCancellationChange, handleNoiseSuppressionChange, useSelectedNoiseSuppressionOption

// Module 10723 (getSelectedNoiseSuppressionOption)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function getSelectedNoiseSuppressionOption() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  const noiseSuppression = obj.getNoiseSuppression();
  const noiseCancellation = obj.getNoiseCancellation();
  if (noiseCancellation) {
    obj2.getNoiseCancellationDeferredToSystem(obj) ? tmp3.NONE : tmp3.KRISP;
  } else {
    return noiseSuppression ? tmp3.STANDARD : tmp3.NONE;
  }
}
({ AnalyticsPages: closure_4, AnalyticsSections: closure_5 } = ME);
let obj = { NONE: "NONE", STANDARD: "STANDARD", KRISP: "KRISP" };
let result = require("getInputDeviceName").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceUtils.tsx");

export const handleAutomaticGainControlChange = function handleAutomaticGainControlChange(arg0) {
  let obj = importDefault(8843);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  const result = obj.setAutomaticGainControl(arg0, obj);
};
export const handleEchoCancellationChange = function handleEchoCancellationChange(echoCancellation) {
  let obj = importDefault(8843);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  obj.setEchoCancellation(echoCancellation, obj);
};
export const handleNoiseSuppressionChange = function handleNoiseSuppressionChange(arg0) {
  let KRISP;
  let STANDARD;
  ({ KRISP, STANDARD } = obj);
  obj = importDefault(8843);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  obj.setNoiseCancellation(arg0 === KRISP, obj);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  importDefault(8843).setNoiseSuppression(arg0 === STANDARD, obj);
};
export const NoiseSuppressionOpt = obj;
export { getSelectedNoiseSuppressionOption };
export const useSelectedNoiseSuppressionOption = function useSelectedNoiseSuppressionOption() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_7(outer1_3));
};
