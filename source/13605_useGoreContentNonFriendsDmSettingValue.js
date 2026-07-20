// Module ID: 13605
// Function ID: 103123
// Name: useGoreContentNonFriendsDmSettingValue
// Dependencies: []
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 13605 (useGoreContentNonFriendsDmSettingValue)
function useGoreContentNonFriendsDmSettingValue() {
  const obj = require(dependencyMap[1]);
  return require(dependencyMap[2]).redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentNonFriendDm)();
}
function onGoreContentNonFriendsDmOnPress() {
  let obj = require(dependencyMap[3]);
  obj = {};
  const intl = require(dependencyMap[5]).intl;
  obj.title = intl.string(require(dependencyMap[5]).t.16/3Bi);
  obj.subtitle = getTitle();
  obj.handlePress = function handlePress(goreContentNonFriendDm) {
    let obj = callback(closure_1[3]);
    obj = { goreContentNonFriendDm };
    return obj.updateGoreContentSetting(obj);
  };
  obj.currentValue = obj.getGoreContentSettingOrDefault().goreContentNonFriendDm;
  const result = require(dependencyMap[4]).handleSensitiveMediaFilterPress(obj);
}
function getTitle() {
  const intl = require(dependencyMap[5]).intl;
  return intl.string(require(dependencyMap[5]).t.Yh+HX1);
}
const _module = require(dependencyMap[6]);
const pressable = _module.createPressable({
  useTitle: getTitle,
  parent: require(dependencyMap[0]).MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  useSearchTerms() {
    const intl = require(dependencyMap[5]).intl;
    const items = [intl.string(require(dependencyMap[5]).t.N/oRI+), , ];
    const intl2 = require(dependencyMap[5]).intl;
    items[1] = intl2.string(require(dependencyMap[5]).t.QVdYsK);
    const intl3 = require(dependencyMap[5]).intl;
    items[2] = intl3.string(require(dependencyMap[5]).t.K0OWP+);
    return items;
  },
  useIsDisabled: require(dependencyMap[7]).useSensitiveMediaSettingDisabled
});
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };
