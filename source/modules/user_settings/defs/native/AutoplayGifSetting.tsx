// Module ID: 14117
// Function ID: 107186
// Name: toggle
// Dependencies: []

// Module 14117 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.9ptHSs);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCESSIBILITY,
  useValue: require(dependencyMap[3]).GifAutoPlay.useSetting,
  onValueChange: require(dependencyMap[3]).GifAutoPlay.updateSetting
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AutoplayGifSetting.tsx");

export default toggle;
