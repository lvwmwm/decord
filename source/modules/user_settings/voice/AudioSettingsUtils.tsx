// Module ID: 9207
// Function ID: 9208
// Name: snapVolumeToDefault
// Dependencies: [685, 4441, 9208, 4792, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 9207 (snapVolumeToDefault)
import { ProtoAudioSettingsContextTypes as closure_2 } from "MAX_FAVORITES";

let result = require("AudioSettingsDefaultVolumes").fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === require(4441) /* BaseConnectionEvent */.MediaEngineContextTypes.STREAM) {
    USER = tmp(9208).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9208).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(4792);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(4792);
  if (Math.abs(result - tmpResult.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(first) {
  if (require(4441) /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT === first) {
    return constants.USER;
  } else if (tmp(4441).MediaEngineContextTypes.STREAM === first) {
    return constants.STREAM;
  }
  tmp = require;
};
