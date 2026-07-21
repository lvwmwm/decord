// Module ID: 14431
// Function ID: 108797
// Name: toggle
// Dependencies: []

// Module 14431 (toggle)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const FriendSourceFlags = arg1(dependencyMap[3]).FriendSourceFlags;
let obj = arg1(dependencyMap[8]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.IqlCSq);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    const selectedTeenId = arg1(dependencyMap[4]).useSelectedTeenId();
    let tmp2;
    if (null != selectedTeenId) {
      tmp2 = selectedTeenId;
    }
    const ParentalControlledFriendSourceFlags = arg1(dependencyMap[5]).ParentalControlledFriendSourceFlags;
    const controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(tmp2);
    const arg1 = controlledSetting;
    const items = [controlledSetting];
    return React.useMemo(() => controlledSetting(closure_2[6]).computeFlags(controlledSetting), items).mutualFriends;
  },
  onValueChange: function onFriendRequestsMutualFriendsSettingValueChange(arg0) {
    const selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = arg1(dependencyMap[5]).ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.getControlledSetting(selectedTeenId);
      const ParentalControlledFriendSourceFlags2 = arg1(dependencyMap[5]).ParentalControlledFriendSourceFlags;
      const obj = importAll(dependencyMap[7]);
      if (arg0) {
        let addFlagResult = obj.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS);
      } else {
        addFlagResult = obj.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
      }
      const result = ParentalControlledFriendSourceFlags2.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  },
  unsearchable: true
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualFriendsSetting.tsx");

export default toggle;
