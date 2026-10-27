// Module ID: 15844
// Function ID: 15845
// Name: getVolumeForSound
// Dependencies: [2011, 5860, 4800, 2]
// Exports: default, getPerceptualSoundboardVolume

// Module 15844 (getVolumeForSound)
import UserSettings from "UserSettings" /* 4800 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5860 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import size from "module_2" /* 2 */;

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
  const obj = PerceptualVolumeUtils;
  const result = obj.amplitudeToPerceptual(tmp) / 100;
  return Math.min(arg0 * result * Math.min(MediaEngineStore.getOutputVolume() / 100, 1), 1);
};
export const getPerceptualSoundboardVolume = function getPerceptualSoundboardVolume(USER) {
  let num = USER;
  const amplitudeToPerceptual = PerceptualVolumeUtils.amplitudeToPerceptual;
  PerceptualVolumeUtils;
  if (USER == null) {
    num = 100;
  }
  return amplitudeToPerceptual(num) / 100;
};
