// Module ID: 9051
// Function ID: 9052
// Name: snapVolumeToDefault
// Dependencies: [685, 4351, 9052, 4702, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 9051 (snapVolumeToDefault)
import { ProtoAudioSettingsContextTypes as closure_2 } from "MAX_FAVORITES";

let result = require("AudioSettingsDefaultVolumes").fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === require(4351) /* BaseConnectionEvent */.MediaEngineContextTypes.STREAM) {
    USER = tmp(9052).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9052).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(4702);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(4702);
  if (Math.abs(result - tmpResult.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(first) {
  if (require(4351) /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT === first) {
    return constants.USER;
  } else if (tmp(4351).MediaEngineContextTypes.STREAM === first) {
    return constants.STREAM;
  }
  tmp = require;
};
