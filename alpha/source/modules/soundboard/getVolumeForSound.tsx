// Module ID: 17023
// Function ID: 17024
// Name: getVolumeForSound
// Dependencies: [2133, 6233, 5131, 2]
// Exports: default, getPerceptualSoundboardVolume

// Module 17023 (getVolumeForSound)
import UserSettings from "UserSettings" /* 5131 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6233 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/soundboard/getVolumeForSound.tsx");

export default function getVolumeForSound(arg0, effectiveVolume) {
  let tmp = effectiveVolume;
  if (effectiveVolume === undefined) {
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
export function getPerceptualSoundboardVolume(effectiveVolume) {
  let num = effectiveVolume;
  const amplitudeToPerceptual = PerceptualVolumeUtils.amplitudeToPerceptual;
  PerceptualVolumeUtils;
  if (effectiveVolume == null) {
    num = 100;
  }
  return amplitudeToPerceptual(num) / 100;
}
