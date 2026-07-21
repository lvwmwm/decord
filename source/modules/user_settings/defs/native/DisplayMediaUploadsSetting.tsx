// Module ID: 14168
// Function ID: 107282
// Name: toggle
// Dependencies: []

// Module 14168 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.VP11No);
  },
  parent: require(dependencyMap[0]).MobileSetting.CHAT,
  useValue: require(dependencyMap[3]).InlineAttachmentMedia.useSetting,
  onValueChange: require(dependencyMap[3]).InlineAttachmentMedia.updateSetting
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaUploadsSetting.tsx");

export default toggle;
