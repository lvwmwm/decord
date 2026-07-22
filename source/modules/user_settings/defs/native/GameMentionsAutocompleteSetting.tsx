// Module ID: 14098
// Function ID: 107040
// Name: toggle
// Dependencies: []

// Module 14098 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.c0oFDw);
  },
  parent: require(dependencyMap[0]).MobileSetting.APPEARANCE,
  usePredicate() {
    return require(dependencyMap[3]).useIsGameMentionsEnabled("GameMentionsInAutocomplete");
  },
  useValue: require(dependencyMap[4]).IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: require(dependencyMap[4]).IncludeGameMentionsInAutocomplete.updateSetting
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;
