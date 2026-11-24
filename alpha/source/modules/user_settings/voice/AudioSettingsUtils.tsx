// Module ID: 5876
// Function ID: 5877
// Name: AudioSettingsUtils
// Dependencies: [1081, 5742, 5877, 5878, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 5876 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5742 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5878 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export function snapVolumeToDefault(effectiveVolume, DEFAULT) {
  let USER;
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(5877).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(5877).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = effectiveVolume;
  const tmpResult = PerceptualVolumeUtils;
  const result = tmpResult.amplitudeToPerceptual(USER);
  const tmpResult2 = PerceptualVolumeUtils;
  if (abs(result - tmpResult2.amplitudeToPerceptual(effectiveVolume)) < 1) {
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
