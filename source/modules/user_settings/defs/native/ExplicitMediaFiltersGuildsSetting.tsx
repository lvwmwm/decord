// Module ID: 13612
// Function ID: 103154
// Name: getTitle
// Dependencies: []

// Module 13612 (getTitle)
function getTitle() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.FP+a42);
}
const MobileSetting = require(dependencyMap[0]).MobileSetting;
const _module = require(dependencyMap[9]);
const pressable = _module.createPressable({
  useTitle: getTitle,
  parent() {
    return MobileSetting.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentGuildsSettingValue() {
    const obj = require(dependencyMap[3]);
    return require(dependencyMap[4]).redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentGuilds)();
  },
  onPress: function onObscuredContentGuildsOnPress() {
    let obj = require(dependencyMap[5]);
    const intl = require(dependencyMap[6]).intl;
    const stringResult = intl.string(require(dependencyMap[6]).t.GYpoAq);
    obj = {
      title: stringResult,
      subtitle: getTitle(),
      handlePress(explicitContentGuilds) {
        let obj = callback(closure_1[5]);
        obj = { explicitContentGuilds };
        return obj.updateExplicitContentSetting(obj);
      }
    };
    const items = [require(dependencyMap[8]).ExplicitContentRedaction.BLOCK];
    obj.excluded = items;
    obj.currentValue = obj.getExplicitContentSettingOrDefault().explicitContentGuilds;
    const result = require(dependencyMap[7]).handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms: function getSearchTerms() {
    const intl = require(dependencyMap[6]).intl;
    const items = [intl.string(require(dependencyMap[6]).t.N/oRI+), , ];
    const intl2 = require(dependencyMap[6]).intl;
    items[1] = intl2.string(require(dependencyMap[6]).t.QVdYsK);
    const intl3 = require(dependencyMap[6]).intl;
    items[2] = intl3.string(require(dependencyMap[6]).t.5mnTa7);
    return items;
  },
  useIsDisabled() {
    let userIsTeen = require(dependencyMap[1]).useUserIsTeen();
    const obj = require(dependencyMap[1]);
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  }
});
const _module1 = require(dependencyMap[10]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;
