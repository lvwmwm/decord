// Module ID: 9203
// Function ID: 9204
// Name: snapVolumeToDefault
// Dependencies: [685, 4440, 9204, 4791, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 9203 (snapVolumeToDefault)
import { ProtoAudioSettingsContextTypes as closure_2 } from "MAX_FAVORITES";

let result = require("AudioSettingsDefaultVolumes").fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === require(4440) /* BaseConnectionEvent */.MediaEngineContextTypes.STREAM) {
    USER = tmp(9204).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9204).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(4791);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(4791);
  if (Math.abs(result - tmpResult.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(first) {
  if (require(4440) /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT === first) {
    return constants.USER;
  } else if (tmp(4440).MediaEngineContextTypes.STREAM === first) {
    return constants.STREAM;
  }
  tmp = require;
};
