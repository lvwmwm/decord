// Module ID: 14392
// Function ID: 108602
// Name: toggle
// Dependencies: []

// Module 14392 (toggle)
const _module = require(dependencyMap[2]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.1CzWUK);
  },
  useDescription() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.jTNPHM);
  },
  parent: require(dependencyMap[0]).MobileSetting.VOICE,
  useValue() {
    const DisableStreamPreviews = require(dependencyMap[1]).DisableStreamPreviews;
    const setting = DisableStreamPreviews.useSetting();
    return null != setting && setting;
  },
  onValueChange: require(dependencyMap[1]).DisableStreamPreviews.updateSetting
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx");

export default toggle;
