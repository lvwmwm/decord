// Module ID: 14440
// Function ID: 108845
// Name: toggle
// Dependencies: []

// Module 14440 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).F3llsQ);
  },
  useDescription() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).6goWcz);
  },
  parent: require(dependencyMap[0]).MobileSetting.DATA_AND_PRIVACY,
  useValue: require(dependencyMap[4]).NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: require(dependencyMap[5]).onNotifyFriendsOnProfileUpdateSettingsChanged,
  usePredicate() {
    return require(dependencyMap[6]).useNotifyFriendsOnProfileUpdateExperiment("NotifyFriendsOnProfileUpdateSetting");
  }
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
