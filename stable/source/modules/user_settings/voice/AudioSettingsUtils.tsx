// Module ID: 9084
// Function ID: 9085
// Name: AudioSettingsUtils
// Dependencies: [1096, 4892, 9085, 5323, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 9084 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1096 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4892 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5323 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(9085).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9085).AudioSettingsDefaultVolumes.USER;
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
