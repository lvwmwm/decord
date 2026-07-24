// Module ID: 14192
// Function ID: 109157
// Name: volumeSlider
// Dependencies: [7751, 10127, 1212, 5739, 5733, 5482, 2]

// Module 14192 (volumeSlider)
import createToggle from "createToggle";

const volumeSlider = createToggle.createVolumeSlider({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.kbFsAD);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 100,
  useValue: require("hasPermissionToPlaySound").getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [importDefault(5482).USER_SETTINGS];
    return require(5733) /* _fetchDefaultSoundsFromApi2 */.updateUserSoundboardVolume(volume, items);
  }
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.kbFsAD);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 100,
  useValue: require("hasPermissionToPlaySound").getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [importDefault(5482).USER_SETTINGS];
    return require(5733) /* _fetchDefaultSoundsFromApi2 */.updateUserSoundboardVolume(volume, items);
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;
