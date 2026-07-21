// Module ID: 14090
// Function ID: 106997
// Name: toggle
// Dependencies: []

// Module 14090 (toggle)
const _module = require(dependencyMap[2]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.aP91Ud);
  },
  parent: require(dependencyMap[0]).MobileSetting.APPEARANCE,
  useValue: require(dependencyMap[3]).SearchResultExactCountEnabled.useSetting,
  onValueChange: require(dependencyMap[3]).SearchResultExactCountEnabled.updateSetting,
  useDescription: function useSearchResultExactCountDescription() {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.qx4cha);
  }
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ExactSearchResultCountsSetting.tsx");

export default toggle;
