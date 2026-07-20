// Module ID: 14011
// Function ID: 106583
// Name: volumeSlider
// Dependencies: []

// Module 14011 (volumeSlider)
const _module = require(dependencyMap[1]);
const volumeSlider = _module.createVolumeSlider({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.kbFsAD);
  },
  parent: require(dependencyMap[0]).MobileSetting.VOICE,
  maximum: 100,
  useValue: require(dependencyMap[3]).getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [importDefault(dependencyMap[5]).USER_SETTINGS];
    return require(dependencyMap[4]).updateUserSoundboardVolume(volume, items);
  }
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;
