// Module ID: 13525
// Function ID: 104062
// Name: getVolumeForSound
// Dependencies: [4178, 4581, 3804, 2]
// Exports: default, getPerceptualSoundboardVolume

// Module 13525 (getVolumeForSound)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("explicitContentFromProto").fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

export default function getVolumeForSound(arg0, USER) {
  let tmp = USER;
  if (USER === undefined) {
    const SoundboardSettings = require(3804) /* explicitContentFromProto */.SoundboardSettings;
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
  const result = require(4581) /* perceptualToAmplitude */.amplitudeToPerceptual(tmp) / 100;
  return Math.min(arg0 * result * Math.min(outputVolume.getOutputVolume() / 100, 1), 1);
};
export const getPerceptualSoundboardVolume = function getPerceptualSoundboardVolume(USER) {
  let num = 100;
  if (null != USER) {
    num = USER;
  }
  return require(4581) /* perceptualToAmplitude */.amplitudeToPerceptual(num) / 100;
};
