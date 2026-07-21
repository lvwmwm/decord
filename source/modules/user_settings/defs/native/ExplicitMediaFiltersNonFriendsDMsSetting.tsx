// Module ID: 13609
// Function ID: 103125
// Name: useObscuredContentNonFriendsDmSettingValue
// Dependencies: []
// Exports: onObscuredContentNonFriendsDmOnPress, useObscuredContentNonFriendsDmSettingValue

// Module 13609 (useObscuredContentNonFriendsDmSettingValue)
function useObscuredContentNonFriendsDmSettingValue() {
  const obj = require(dependencyMap[1]);
  return require(dependencyMap[2]).redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentNonFriendDm)();
}
function onObscuredContentNonFriendsDmOnPress() {
  let obj = require(dependencyMap[3]);
  const intl = require(dependencyMap[4]).intl;
  const stringResult = intl.string(require(dependencyMap[4]).t.GYpoAq);
  obj = {
    title: stringResult,
    subtitle: getTitle(),
    handlePress(explicitContentNonFriendDm) {
      let obj = callback(closure_1[3]);
      obj = { explicitContentNonFriendDm };
      return obj.updateExplicitContentSetting(obj);
    },
    currentValue: obj.getExplicitContentSettingOrDefault().explicitContentNonFriendDm
  };
  const result = require(dependencyMap[5]).handleSensitiveMediaFilterPress(obj);
}
function getTitle() {
  const intl = require(dependencyMap[4]).intl;
  return intl.string(require(dependencyMap[4]).t.Yh+HX1);
}
const MobileSetting = require(dependencyMap[0]).MobileSetting;
const _module = require(dependencyMap[6]);
const pressable = _module.createPressable({
  useTitle: getTitle,
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
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
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };
