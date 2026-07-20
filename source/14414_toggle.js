// Module ID: 14414
// Function ID: 108724
// Name: toggle
// Dependencies: []

// Module 14414 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.XpBObB);
  },
  parent: require(dependencyMap[0]).MobileSetting.CONNECTED_GAMES,
  useValue: require(dependencyMap[3]).AllowGameFriendDmsInDiscord.useSetting,
  onValueChange: require(dependencyMap[3]).AllowGameFriendDmsInDiscord.updateSetting,
  useSearchTerms() {
    const intl = require(dependencyMap[2]).intl;
    const items = [intl.string(require(dependencyMap[2]).t.XpBObB)];
    return items;
  },
  usePredicate: require(dependencyMap[4]).useIsAllowGameFriendDMsSettingVisible
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AllowGameFriendDMsSetting.tsx");

export default toggle;
