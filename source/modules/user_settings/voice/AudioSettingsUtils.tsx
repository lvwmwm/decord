// Module ID: 8772
// Function ID: 69484
// Name: snapVolumeToDefault
// Dependencies: [662, 4228, 8773, 4581, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 8772 (snapVolumeToDefault)
import { ProtoAudioSettingsContextTypes as closure_2 } from "MAX_FAVORITES";

let result = require("AudioSettingsDefaultVolumes").fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(volume, DEFAULT) {
  let tmp = volume;
  if (DEFAULT === require(4228) /* getMediaEngineImpl */.MediaEngineContextTypes.STREAM) {
    let USER = require(8773) /* AudioSettingsDefaultVolumes */.AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = require(8773) /* AudioSettingsDefaultVolumes */.AudioSettingsDefaultVolumes.USER;
  }
  const result = require(4581) /* perceptualToAmplitude */.amplitudeToPerceptual(USER);
  const obj = require(4581) /* perceptualToAmplitude */;
  if (Math.abs(result - obj2.amplitudeToPerceptual(tmp)) < 1) {
    tmp = USER;
  }
  return tmp;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(arg0) {
  if (require(4228) /* getMediaEngineImpl */.MediaEngineContextTypes.DEFAULT === arg0) {
    return constants.USER;
  } else if (require(4228) /* getMediaEngineImpl */.MediaEngineContextTypes.STREAM === arg0) {
    return constants.STREAM;
  }
};
