// Module ID: 13613
// Function ID: 103152
// Name: getTitle
// Dependencies: []

// Module 13613 (getTitle)
function getTitle() {
  const intl = require(dependencyMap[7]).intl;
  return intl.string(require(dependencyMap[7]).t.FP+a42);
}
const _module = require(dependencyMap[9]);
const pressable = _module.createPressable({
  useTitle: getTitle,
  parent: require(dependencyMap[0]).MobileSetting.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentGuildsSettingValue() {
    const obj = require(dependencyMap[3]);
    return require(dependencyMap[4]).redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentGuilds)();
  },
  onPress: function onGoreContentGuildsOnPress() {
    let obj = require(dependencyMap[5]);
    obj = {};
    const intl = require(dependencyMap[7]).intl;
    obj.title = intl.string(require(dependencyMap[7]).t.16/3Bi);
    obj.subtitle = getTitle();
    obj.handlePress = function handlePress(goreContentGuilds) {
      let obj = callback(closure_1[5]);
      obj = { goreContentGuilds };
      return obj.updateGoreContentSetting(obj);
    };
    const items = [require(dependencyMap[8]).ExplicitContentRedaction.BLOCK];
    obj.excluded = items;
    obj.currentValue = obj.getGoreContentSettingOrDefault().goreContentGuilds;
    const result = require(dependencyMap[6]).handleSensitiveMediaFilterPress(obj);
  },
  useIsDisabled() {
    let userIsTeen = require(dependencyMap[1]).useUserIsTeen();
    const obj = require(dependencyMap[1]);
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  },
  useSearchTerms() {
    const intl = require(dependencyMap[7]).intl;
    const items = [intl.string(require(dependencyMap[7]).t.N/oRI+), , ];
    const intl2 = require(dependencyMap[7]).intl;
    items[1] = intl2.string(require(dependencyMap[7]).t.QVdYsK);
    const intl3 = require(dependencyMap[7]).intl;
    items[2] = intl3.string(require(dependencyMap[7]).t.K0OWP+);
    return items;
  }
});
const _module1 = require(dependencyMap[10]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersGuildsSetting.tsx");

export default pressable;
