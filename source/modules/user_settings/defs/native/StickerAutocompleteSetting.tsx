// Module ID: 14177
// Function ID: 107328
// Name: toggle
// Dependencies: []

// Module 14177 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.29xPVZ);
  },
  parent: require(dependencyMap[0]).MobileSetting.CHAT,
  useValue: require(dependencyMap[3]).IncludeStickersInAutocomplete.useSetting,
  onValueChange: require(dependencyMap[4]).setStickerAutocomplete
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/StickerAutocompleteSetting.tsx");

export default toggle;
