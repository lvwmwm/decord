// Module ID: 13765
// Function ID: 104061
// Name: toggle
// Dependencies: []

// Module 13765 (toggle)
let closure_2 = importAll(dependencyMap[0]);
({ AllFriendSourceFlags: closure_3, FriendSourceFlags: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.mGr3CX);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const FriendSourceFlagsSetting = arg1(dependencyMap[3]).FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.useSetting();
    const arg1 = setting;
    const items = [setting];
    return React.useMemo(() => setting(closure_1[4]).computeFlags(setting), items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = arg1(dependencyMap[3]).FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = tmp;
    } else {
      tmp3 = tmp & ~constants.NO_RELATION;
    }
    FriendSourceFlagsSetting.updateSetting(tmp3);
  },
  useIsDisabled() {
    return arg1(dependencyMap[5]).useIsParentallyControlled();
  }
};
const toggle = obj.createToggle(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsEveryoneSetting.tsx");

export default toggle;
