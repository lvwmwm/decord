// Module ID: 8836
// Function ID: 8837
// Name: snapVolumeToDefault
// Dependencies: [685, 4286, 8837, 4637, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 8836 (snapVolumeToDefault)
import { ProtoAudioSettingsContextTypes as closure_2 } from "MAX_FAVORITES";

let result = require("AudioSettingsDefaultVolumes").fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === require(4286) /* BaseConnectionEvent */.MediaEngineContextTypes.STREAM) {
    USER = tmp(8837).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(8837).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(4637);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(4637);
  if (Math.abs(result - tmpResult.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(first) {
  if (require(4286) /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT === first) {
    return constants.USER;
  } else if (tmp(4286).MediaEngineContextTypes.STREAM === first) {
    return constants.STREAM;
  }
  tmp = require;
};
