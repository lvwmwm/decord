// Module ID: 8837
// Function ID: 69735
// Name: snapVolumeToDefault
// Dependencies: []
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 8837 (snapVolumeToDefault)
let closure_2 = require(dependencyMap[0]).ProtoAudioSettingsContextTypes;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(volume, DEFAULT) {
  let tmp = volume;
  if (DEFAULT === require(dependencyMap[1]).MediaEngineContextTypes.STREAM) {
    let USER = require(dependencyMap[2]).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = require(dependencyMap[2]).AudioSettingsDefaultVolumes.USER;
  }
  const result = require(dependencyMap[3]).amplitudeToPerceptual(USER);
  const obj = require(dependencyMap[3]);
  if (Math.abs(result - obj2.amplitudeToPerceptual(tmp)) < 1) {
    tmp = USER;
  }
  return tmp;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(arg0) {
  if (require(dependencyMap[1]).MediaEngineContextTypes.DEFAULT === arg0) {
    return constants.USER;
  } else if (require(dependencyMap[1]).MediaEngineContextTypes.STREAM === arg0) {
    return constants.STREAM;
  }
};
