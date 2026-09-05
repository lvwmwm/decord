// Module ID: 14540
// Function ID: 14541
// Name: getVolumeForSound
// Dependencies: [1908, 5015, 1935, 2]
// Exports: default, getPerceptualSoundboardVolume

// Module 14540 (getVolumeForSound)
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import perceptualToAmplitude from "perceptualToAmplitude" /* 5015 */;
import closure_2 from "_detectH265HardwareDecode" /* 1908 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

export default function getVolumeForSound(arg0, USER) {
  let tmp = USER;
  if (USER === undefined) {
    const SoundboardSettings = explicitContentFromProto.SoundboardSettings;
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
  const result = perceptualToAmplitude.amplitudeToPerceptual(tmp) / 100;
  return Math.min(arg0 * result * Math.min(outputVolume.getOutputVolume() / 100, 1), 1);
};
export const getPerceptualSoundboardVolume = function getPerceptualSoundboardVolume(USER) {
  let num = USER;
  if (USER == null) {
    num = 100;
  }
  return perceptualToAmplitude.amplitudeToPerceptual(num) / 100;
};
