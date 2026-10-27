// Module ID: 5858
// Function ID: 5859
// Name: AudioSettingsUtils
// Dependencies: [1094, 5740, 5859, 5860, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 5858 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1094 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5740 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5860 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(5859).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(5859).AudioSettingsDefaultVolumes.USER;
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
