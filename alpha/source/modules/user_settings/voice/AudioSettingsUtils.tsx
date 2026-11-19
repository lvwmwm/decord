// Module ID: 5694
// Function ID: 5695
// Name: AudioSettingsUtils
// Dependencies: [1082, 5558, 5695, 5696, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 5694 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5558 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5696 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export function snapVolumeToDefault(effectiveVolume, DEFAULT) {
  let USER;
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(5695).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(5695).AudioSettingsDefaultVolumes.USER;
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
