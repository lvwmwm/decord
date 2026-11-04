// Module ID: 16636
// Function ID: 16637
// Name: getVolumeForSound
// Dependencies: [2135, 6058, 4966, 2]
// Exports: default, getPerceptualSoundboardVolume

// Module 16636 (getVolumeForSound)
import UserSettings from "UserSettings" /* 4966 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6058 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
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
