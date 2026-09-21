// Module ID: 9892
// Function ID: 9893
// Name: AudioSettingsUtils
// Dependencies: [1088, 4813, 9893, 5229, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 9892 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1088 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4813 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5229 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(9893).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9893).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  const result = PerceptualVolumeUtils.amplitudeToPerceptual(USER);
  const tmpResult = PerceptualVolumeUtils;
  if (Math.abs(result - tmpResult2.amplitudeToPerceptual(USER)) < 1) {
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
