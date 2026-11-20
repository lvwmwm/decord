// Module ID: 5696
// Function ID: 5697
// Name: AudioSettingsUtils
// Dependencies: [1081, 5560, 5697, 5698, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 5696 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5560 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5698 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export function snapVolumeToDefault(effectiveVolume, DEFAULT) {
  let USER;
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(5697).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(5697).AudioSettingsDefaultVolumes.USER;
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
