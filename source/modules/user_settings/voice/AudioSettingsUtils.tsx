// Module ID: 9157
// Function ID: 9158
// Name: snapVolumeToDefault
// Dependencies: [685, 4400, 9158, 4751, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 9157 (snapVolumeToDefault)
import { ProtoAudioSettingsContextTypes as closure_2 } from "MAX_FAVORITES";

let result = require("AudioSettingsDefaultVolumes").fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === require(4400) /* BaseConnectionEvent */.MediaEngineContextTypes.STREAM) {
    USER = tmp(9158).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9158).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(4751);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(4751);
  if (Math.abs(result - tmpResult.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(first) {
  if (require(4400) /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT === first) {
    return constants.USER;
  } else if (tmp(4400).MediaEngineContextTypes.STREAM === first) {
    return constants.STREAM;
  }
  tmp = require;
};
