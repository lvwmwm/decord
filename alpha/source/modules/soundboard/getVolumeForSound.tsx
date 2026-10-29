// Module ID: 16306
// Function ID: 16307
// Name: getVolumeForSound
// Dependencies: [2012, 5897, 4833, 2]
// Exports: default, getPerceptualSoundboardVolume

// Module 16306 (getVolumeForSound)
import UserSettings from "UserSettings" /* 4833 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5897 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
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
export function getPerceptualSoundboardVolume(USER) {
  let num = USER;
  const amplitudeToPerceptual = PerceptualVolumeUtils.amplitudeToPerceptual;
  PerceptualVolumeUtils;
  if (USER == null) {
    num = 100;
  }
  return amplitudeToPerceptual(num) / 100;
}
