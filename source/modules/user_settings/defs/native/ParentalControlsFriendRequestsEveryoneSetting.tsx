// Module ID: 14433
// Function ID: 108824
// Name: toggle
// Dependencies: []

// Module 14433 (toggle)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ AllFriendSourceFlags: closure_4, FriendSourceFlags: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[7]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.mGr3CX);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const selectedTeenId = arg1(dependencyMap[4]).useSelectedTeenId();
    let tmp2;
    if (null != selectedTeenId) {
      tmp2 = selectedTeenId;
    }
    const ParentalControlledFriendSourceFlags = arg1(dependencyMap[5]).ParentalControlledFriendSourceFlags;
    const controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(tmp2);
    const arg1 = controlledSetting;
    const items = [controlledSetting];
    return React.useMemo(() => controlledSetting(closure_1[6]).computeFlags(controlledSetting), items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = arg1(dependencyMap[5]).ParentalControlledFriendSourceFlags;
      if (arg0) {
        let tmp7 = tmp4;
      } else {
        tmp7 = tmp4 & ~constants.NO_RELATION;
      }
      const result = ParentalControlledFriendSourceFlags.updateControlledSetting(selectedTeenId, tmp7);
    }
  },
  unsearchable: true
};
const toggle = obj.createToggle(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default toggle;
