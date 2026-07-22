// Module ID: 14178
// Function ID: 107355
// Name: toggle
// Dependencies: []

// Module 14178 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.U47N1p);
  },
  parent: require(dependencyMap[0]).MobileSetting.CHAT,
  useValue: require(dependencyMap[3]).InlineEmbedMedia.useSetting,
  onValueChange: require(dependencyMap[3]).InlineEmbedMedia.updateSetting
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaLinksSetting.tsx");

export default toggle;
