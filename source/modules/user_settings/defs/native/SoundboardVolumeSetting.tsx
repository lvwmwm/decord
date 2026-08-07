// Module ID: 14417
// Function ID: 14418
// Name: volumeSlider
// Dependencies: [8022, 10380, 1236, 5899, 5893, 5688, 2]

// Module 14417 (volumeSlider)
import createToggle from "createToggle";

const volumeSlider = createToggle.createVolumeSlider({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.kbFsAD);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 100,
  useValue: require("hasPermissionToPlaySound").getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [importDefault(5688).USER_SETTINGS];
    return require(5893) /* _fetchDefaultSoundsFromApi2 */.updateUserSoundboardVolume(volume, items);
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.kbFsAD);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 100,
  useValue: require("hasPermissionToPlaySound").getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [importDefault(5688).USER_SETTINGS];
    return require(5893) /* _fetchDefaultSoundsFromApi2 */.updateUserSoundboardVolume(volume, items);
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;
