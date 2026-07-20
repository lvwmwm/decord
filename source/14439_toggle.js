// Module ID: 14439
// Function ID: 108842
// Name: toggle
// Dependencies: []

// Module 14439 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).A0FVCV);
  },
  useDescription() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).vHX6RG);
  },
  parent: require(dependencyMap[0]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require(dependencyMap[4]).NotifyFriendsOnComeOnline.useSetting,
  onValueChange: require(dependencyMap[5]).onNotifyFriendsOnComeOnlineSettingsChanged
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
