// Module ID: 13331
// Function ID: 101374
// Name: getVolumeForSound
// Dependencies: []
// Exports: default, getPerceptualSoundboardVolume

// Module 13331 (getVolumeForSound)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

export default function getVolumeForSound(arg0, USER) {
  let tmp = USER;
  if (USER === undefined) {
    const SoundboardSettings = USER(dependencyMap[2]).SoundboardSettings;
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
  const result = USER(dependencyMap[1]).amplitudeToPerceptual(tmp) / 100;
  return Math.min(arg0 * result * Math.min(outputVolume.getOutputVolume() / 100, 1), 1);
};
export const getPerceptualSoundboardVolume = function getPerceptualSoundboardVolume(USER) {
  let num = 100;
  if (null != USER) {
    num = USER;
  }
  return arg1(dependencyMap[1]).amplitudeToPerceptual(num) / 100;
};
