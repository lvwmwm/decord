// Module ID: 14861
// Function ID: 14862
// Name: getVolumeForSound
// Dependencies: [1996, 5261, 2023, 2]
// Exports: default, getPerceptualSoundboardVolume

// Module 14861 (getVolumeForSound)
import UserSettings from "UserSettings" /* 2023 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5261 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

export default function getVolumeForSound(arg0, USER) {
  let tmp = USER;
  if (USER === undefined) {
    const SoundboardSettings = UserSettings.SoundboardSettings;
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
  const result = PerceptualVolumeUtils.amplitudeToPerceptual(tmp) / 100;
  return Math.min(arg0 * result * Math.min(MediaEngineStore.getOutputVolume() / 100, 1), 1);
};
export const getPerceptualSoundboardVolume = function getPerceptualSoundboardVolume(USER) {
  let num = USER;
  if (USER == null) {
    num = 100;
  }
  return PerceptualVolumeUtils.amplitudeToPerceptual(num) / 100;
};
