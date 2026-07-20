// Module ID: 13592
// Function ID: 103019
// Name: getTitle
// Dependencies: []

// Module 13592 (getTitle)
function getTitle() {
  const intl = require(dependencyMap[4]).intl;
  return intl.string(require(dependencyMap[4]).t.+uI23H);
}
const MobileSetting = require(dependencyMap[0]).MobileSetting;
const _module = require(dependencyMap[6]);
const pressable = _module.createPressable({
  useTitle: getTitle,
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = require(dependencyMap[1]);
    return require(dependencyMap[2]).redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let obj = require(dependencyMap[3]);
    const intl = require(dependencyMap[4]).intl;
    const stringResult = intl.string(require(dependencyMap[4]).t.GYpoAq);
    obj = {
      title: stringResult,
      subtitle: getTitle(),
      handlePress(explicitContentFriendDm) {
        let obj = callback(closure_1[3]);
        obj = { explicitContentFriendDm };
        return obj.updateExplicitContentSetting(obj);
      },
      currentValue: obj.getExplicitContentSettingOrDefault().explicitContentFriendDm
    };
    const result = require(dependencyMap[5]).handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms: function getSearchTerms() {
    const intl = require(dependencyMap[4]).intl;
    const items = [intl.string(require(dependencyMap[4]).t.N/oRI+), , ];
    const intl2 = require(dependencyMap[4]).intl;
    items[1] = intl2.string(require(dependencyMap[4]).t.QVdYsK);
    const intl3 = require(dependencyMap[4]).intl;
    items[2] = intl3.string(require(dependencyMap[4]).t.5mnTa7);
    return items;
  },
  useIsDisabled: require(dependencyMap[7]).useSensitiveMediaSettingDisabled
});
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
