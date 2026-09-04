// Module ID: 15177
// Function ID: 15178
// Name: volumeSlider
// Dependencies: [7906, 11400, 1233, 7282, 7276, 7122, 2]

// Module 15177 (volumeSlider)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7122 */;
import _fetchDefaultSoundsFromApi2 from "_fetchDefaultSoundsFromApi2" /* 7276 */;
import hasPermissionToPlaySound from "hasPermissionToPlaySound" /* 7282 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import createToggle from "createToggle" /* 11400 */;

const volumeSlider = createToggle.createVolumeSlider({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.kbFsAD);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  maximum: 100,
  useValue: hasPermissionToPlaySound.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [QUICK_SWITCHERDefault.USER_SETTINGS];
    return _fetchDefaultSoundsFromApi2.updateUserSoundboardVolume(volume, items);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.kbFsAD);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  maximum: 100,
  useValue: hasPermissionToPlaySound.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [QUICK_SWITCHERDefault.USER_SETTINGS];
    return _fetchDefaultSoundsFromApi2.updateUserSoundboardVolume(volume, items);
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;
