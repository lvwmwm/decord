// Module ID: 5815
// Function ID: 5816
// Name: AudioSettingsUtils
// Dependencies: [1097, 5700, 5816, 5817, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 5815 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1097 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5700 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5817 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(5816).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(5816).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  const tmpResult = PerceptualVolumeUtils;
  const result = tmpResult.amplitudeToPerceptual(USER);
  const tmpResult2 = PerceptualVolumeUtils;
  if (abs(result - tmpResult2.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(arg0) {
  if (BaseConnectionEvent.MediaEngineContextTypes.DEFAULT === arg0) {
    return constants.USER;
  } else if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === arg0) {
    return constants.STREAM;
  }
};
