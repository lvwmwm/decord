// Module ID: 14167
// Function ID: 107299
// Name: toggle
// Dependencies: []

// Module 14167 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.5bK9vw);
  },
  parent: require(dependencyMap[0]).MobileSetting.CHAT,
  useValue: require(dependencyMap[3]).RenderEmbeds.useSetting,
  onValueChange: require(dependencyMap[3]).RenderEmbeds.updateSetting
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/EmbedAndLinkPreviewsSetting.tsx");

export default toggle;
