// Module ID: 9097
// Function ID: 9098
// Name: snapVolumeToDefault
// Dependencies: [685, 4398, 9098, 4749, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 9097 (snapVolumeToDefault)
import { ProtoAudioSettingsContextTypes as closure_2 } from "MAX_FAVORITES";

let result = require("AudioSettingsDefaultVolumes").fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === require(4398) /* BaseConnectionEvent */.MediaEngineContextTypes.STREAM) {
    USER = tmp(9098).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9098).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(4749);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(4749);
  if (Math.abs(result - tmpResult.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(first) {
  if (require(4398) /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT === first) {
    return constants.USER;
  } else if (tmp(4398).MediaEngineContextTypes.STREAM === first) {
    return constants.STREAM;
  }
  tmp = require;
};
