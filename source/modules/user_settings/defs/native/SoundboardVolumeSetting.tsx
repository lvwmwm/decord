// Module ID: 14554
// Function ID: 14555
// Name: volumeSlider
// Dependencies: [8127, 10407, 1236, 6002, 5996, 5788, 2]

// Module 14554 (volumeSlider)
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
    const items = [importDefault(5788).USER_SETTINGS];
    return require(5996) /* _fetchDefaultSoundsFromApi2 */.updateUserSoundboardVolume(volume, items);
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
    const items = [importDefault(5788).USER_SETTINGS];
    return require(5996) /* _fetchDefaultSoundsFromApi2 */.updateUserSoundboardVolume(volume, items);
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;
