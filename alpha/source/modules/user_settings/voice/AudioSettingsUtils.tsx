// Module ID: 6168
// Function ID: 6169
// Name: AudioSettingsUtils
// Dependencies: [1082, 6033, 6169, 6170, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 6168 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 6033 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6170 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(6169).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(6169).AudioSettingsDefaultVolumes.USER;
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
