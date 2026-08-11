// Module ID: 13812
// Function ID: 13813
// Name: getVolumeForSound
// Dependencies: [4351, 4751, 3993, 2]
// Exports: default, getPerceptualSoundboardVolume

// Module 13812 (getVolumeForSound)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";

const require = arg1;
let result = require("explicitContentFromProto").fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

export default function getVolumeForSound(arg0, USER) {
  let tmp = USER;
  if (USER === undefined) {
    const SoundboardSettings = require(3993) /* explicitContentFromProto */.SoundboardSettings;
    const setting = SoundboardSettings.getSetting();
    let num;
    if (setting != null) {
      num = setting.volume;
    }
    if (num == null) {
      num = 100;
    }
    tmp = num;
  }
  const result = require(4751) /* perceptualToAmplitude */.amplitudeToPerceptual(tmp) / 100;
  return Math.min(arg0 * result * Math.min(outputVolume.getOutputVolume() / 100, 1), 1);
};
export const getPerceptualSoundboardVolume = function getPerceptualSoundboardVolume(USER) {
  let num = USER;
  if (USER == null) {
    num = 100;
  }
  return require(4751) /* perceptualToAmplitude */.amplitudeToPerceptual(num) / 100;
};
