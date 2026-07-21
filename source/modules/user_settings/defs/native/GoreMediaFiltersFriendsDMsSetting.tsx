// Module ID: 13613
// Function ID: 103162
// Name: getTitle
// Dependencies: []

// Module 13613 (getTitle)
function getTitle() {
  const intl = require(dependencyMap[5]).intl;
  return intl.string(require(dependencyMap[5]).t.+uI23H);
}
const _module = require(dependencyMap[6]);
const pressable = _module.createPressable({
  useTitle: getTitle,
  parent: require(dependencyMap[0]).MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = require(dependencyMap[1]);
    return require(dependencyMap[2]).redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    let obj = require(dependencyMap[3]);
    obj = {};
    const intl = require(dependencyMap[5]).intl;
    obj.title = intl.string(require(dependencyMap[5]).t.16/3Bi);
    obj.subtitle = getTitle();
    obj.handlePress = function handlePress(goreContentFriendDm) {
      let obj = callback(closure_1[3]);
      obj = { goreContentFriendDm };
      return obj.updateGoreContentSetting(obj);
    };
    obj.currentValue = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    const result = require(dependencyMap[4]).handleSensitiveMediaFilterPress(obj);
  },
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
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
