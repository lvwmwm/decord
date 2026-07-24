// Module ID: 13514
// Function ID: 103935
// Name: getVolumeForSound
// Dependencies: [4177, 4580, 3803, 2]
// Exports: default, getPerceptualSoundboardVolume

// Module 13514 (getVolumeForSound)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("explicitContentFromProto").fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

export default function getVolumeForSound(arg0, USER) {
  let tmp = USER;
  if (USER === undefined) {
    const SoundboardSettings = require(3803) /* explicitContentFromProto */.SoundboardSettings;
    const setting = SoundboardSettings.getSetting();
    let volume;
    if (null != setting) {
      volume = setting.volume;
    }
    let num2 = 100;
    if (null != volume) {
      num2 = volume;
    }
    tmp = num2;
  }
  const result = require(4580) /* perceptualToAmplitude */.amplitudeToPerceptual(tmp) / 100;
  return Math.min(arg0 * result * Math.min(outputVolume.getOutputVolume() / 100, 1), 1);
};
export const getPerceptualSoundboardVolume = function getPerceptualSoundboardVolume(USER) {
  let num = 100;
  if (null != USER) {
    num = USER;
  }
  return require(4580) /* perceptualToAmplitude */.amplitudeToPerceptual(num) / 100;
};
