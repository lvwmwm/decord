// Module ID: 9021
// Function ID: 9022
// Name: snapVolumeToDefault
// Dependencies: [682, 4582, 9022, 4976, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 9021 (snapVolumeToDefault)
import set from "set" /* 2 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 682 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4582 */;

let closure_2 = MAX_FAVORITES.ProtoAudioSettingsContextTypes;
let result = set.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(9022).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9022).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  let tmpResult = tmp(4976);
  const result = tmpResult.amplitudeToPerceptual(USER);
  tmpResult = tmp(4976);
  if (Math.abs(result - tmpResult.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(first) {
  if (BaseConnectionEvent.MediaEngineContextTypes.DEFAULT === first) {
    return constants.USER;
  } else if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === first) {
    return constants.STREAM;
  }
  const tmp = require;
};
