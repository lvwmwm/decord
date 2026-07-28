// Module ID: 8816
// Function ID: 69635
// Name: snapVolumeToDefault
// Dependencies: [662, 4262, 8817, 4615, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 8816 (snapVolumeToDefault)
import { ProtoAudioSettingsContextTypes as closure_2 } from "MAX_FAVORITES";

let result = require("AudioSettingsDefaultVolumes").fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(volume, DEFAULT) {
  let tmp = volume;
  if (DEFAULT === require(4262) /* getMediaEngineImpl */.MediaEngineContextTypes.STREAM) {
    let USER = require(8817) /* AudioSettingsDefaultVolumes */.AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = require(8817) /* AudioSettingsDefaultVolumes */.AudioSettingsDefaultVolumes.USER;
  }
  const result = require(4615) /* perceptualToAmplitude */.amplitudeToPerceptual(USER);
  const obj = require(4615) /* perceptualToAmplitude */;
  if (Math.abs(result - obj2.amplitudeToPerceptual(tmp)) < 1) {
    tmp = USER;
  }
  return tmp;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(arg0) {
  if (require(4262) /* getMediaEngineImpl */.MediaEngineContextTypes.DEFAULT === arg0) {
    return constants.USER;
  } else if (require(4262) /* getMediaEngineImpl */.MediaEngineContextTypes.STREAM === arg0) {
    return constants.STREAM;
  }
};
