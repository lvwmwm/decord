// Module ID: 13627
// Function ID: 103242
// Name: toggle
// Dependencies: []

// Module 13627 (toggle)
const FriendDiscoveryFlags = require(dependencyMap[1]).FriendDiscoveryFlags;
const _module = require(dependencyMap[6]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.dEYpSt);
  },
  parent: require(dependencyMap[0]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = require(dependencyMap[3]).FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return require(dependencyMap[4]).hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = require(dependencyMap[3]).FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = require(dependencyMap[4]);
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = importDefault(dependencyMap[5]).updateDiscoverability(obj);
  }
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx");

export default toggle;
