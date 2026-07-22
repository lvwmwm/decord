// Module ID: 14250
// Function ID: 107677
// Name: toggle
// Dependencies: []

// Module 14250 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.ObIb1Q);
  },
  parent: require(dependencyMap[0]).MobileSetting.ADVANCED,
  useValue: require(dependencyMap[3]).DeveloperMode.useSetting,
  onValueChange: require(dependencyMap[3]).DeveloperMode.updateSetting
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DeveloperModeSetting.tsx");

export default toggle;
