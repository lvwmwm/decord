// Module ID: 13759
// Function ID: 104034
// Name: toggle
// Dependencies: []

// Module 13759 (toggle)
let closure_3 = importAll(dependencyMap[0]);
const FriendSourceFlags = arg1(dependencyMap[2]).FriendSourceFlags;
let obj = arg1(dependencyMap[7]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.IqlCSq);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    const FriendSourceFlagsSetting = arg1(dependencyMap[4]).FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.useSetting();
    const arg1 = setting;
    const items = [setting];
    return React.useMemo(() => setting(closure_2[5]).computeFlags(setting), items).mutualFriends;
  },
  onValueChange: function onFriendRequestsMutualFriendsSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = arg1(dependencyMap[4]).FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.getSetting();
    const FriendSourceFlagsSetting2 = arg1(dependencyMap[4]).FriendSourceFlagsSetting;
    const obj = importAll(dependencyMap[6]);
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, FriendSourceFlags.MUTUAL_FRIENDS);
    } else {
      addFlagResult = obj.removeFlags(setting, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
    }
    FriendSourceFlagsSetting2.updateSetting(addFlagResult);
  },
  useIsDisabled() {
    return arg1(dependencyMap[3]).useIsParentallyControlled();
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualFriendsSetting.tsx");

export default toggle;
