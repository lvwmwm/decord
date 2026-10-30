// Module ID: 5902
// Function ID: 5903
// Name: AudioSettingsUtils
// Dependencies: [1082, 5784, 5903, 5904, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 5902 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5784 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5904 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(5903).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(5903).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  const tmpResult = PerceptualVolumeUtils;
  const result = tmpResult.amplitudeToPerceptual(USER);
  const tmpResult2 = PerceptualVolumeUtils;
  if (abs(result - tmpResult2.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
}
export function coerceAudioContextForProto(arg0) {
  if (BaseConnectionEvent.MediaEngineContextTypes.DEFAULT === arg0) {
    return constants.USER;
  } else if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === arg0) {
    return constants.STREAM;
  }
}
