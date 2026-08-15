// Module ID: 9656
// Function ID: 9657
// Name: snapVolumeToDefault
// Dependencies: [685, 4569, 9657, 4782, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 9656 (snapVolumeToDefault)
import { ProtoAudioSettingsContextTypes as closure_2 } from "MAX_FAVORITES";

let result = require("AudioSettingsDefaultVolumes").fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === require(4569) /* BaseConnectionEvent */.MediaEngineContextTypes.STREAM) {
    USER = tmp(9657).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9657).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(4782);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(4782);
  if (Math.abs(result - tmpResult.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(first) {
  if (require(4569) /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT === first) {
    return constants.USER;
  } else if (tmp(4569).MediaEngineContextTypes.STREAM === first) {
    return constants.STREAM;
  }
  tmp = require;
};
