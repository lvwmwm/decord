// Module ID: 5725
// Function ID: 5726
// Name: AudioSettingsUtils
// Dependencies: [1082, 5589, 5726, 5727, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 5725 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5589 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5727 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export function snapVolumeToDefault(effectiveVolume, DEFAULT) {
  let USER;
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(5726).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(5726).AudioSettingsDefaultVolumes.USER;
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
