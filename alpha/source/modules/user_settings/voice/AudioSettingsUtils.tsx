// Module ID: 6229
// Function ID: 6230
// Name: AudioSettingsUtils
// Dependencies: [1082, 6093, 6230, 6231, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 6229 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 6093 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6231 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export function snapVolumeToDefault(effectiveVolume, DEFAULT) {
  let USER;
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(6230).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(6230).AudioSettingsDefaultVolumes.USER;
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
