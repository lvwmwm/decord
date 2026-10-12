// Module ID: 5249
// Function ID: 5250
// Name: AudioSettingsUtils
// Dependencies: [1095, 5137, 5250, 5251, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 5249 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5137 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5251 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(5250).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(5250).AudioSettingsDefaultVolumes.USER;
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
