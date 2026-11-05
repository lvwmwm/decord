// Module ID: 6059
// Function ID: 6060
// Name: AudioSettingsUtils
// Dependencies: [1082, 5926, 6060, 6061, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 6059 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5926 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6061 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(6060).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(6060).AudioSettingsDefaultVolumes.USER;
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
