// Module ID: 16218
// Function ID: 16219
// Name: ParentalControlsFriendRequestsMutualFriendsSetting
// Dependencies: [19, 7252, 7974, 1085, 558, 576, 7722, 15015, 6682, 1403, 10629, 1126, 2]

// Module 16218 (ParentalControlsFriendRequestsMutualFriendsSetting)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import FlagUtilsAll from "FlagUtils" /* 1403 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6682 */;
import useSelectedTeen from "useSelectedTeen" /* 7722 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15015 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7252 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendSourceFlags = Constants.FriendSourceFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendRequestsMutualFriendsSettingValue() {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = useSelectedTeen;
  const selectedTeenId = obj2.useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = tmp(15015).ParentalControlledFriendSourceFlags;
  const controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
  if (cResult[0] !== controlledSetting) {
    const tmpResult = UserSettingsUtils;
    const flags = tmpResult.computeFlags(controlledSetting);
    cResult[0] = controlledSetting;
    cResult[1] = flags;
    tmp6 = flags;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6.mutualFriends;
}) : (function useFriendRequestsMutualFriendsSettingValue() {
  let controlledSetting;
  let obj = controlledSetting(7722);
  const selectedTeenId = obj.useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = controlledSetting(15015).ParentalControlledFriendSourceFlags;
  controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
  const items = [controlledSetting];
  return react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(controlledSetting);
  }, items).mutualFriends;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.IqlCSq);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp2,
  onValueChange: function onFriendRequestsMutualFriendsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let addFlagResult;
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.getControlledSetting(selectedTeenId);
      const ParentalControlledFriendSourceFlags2 = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const updateControlledSetting = ParentalControlledFriendSourceFlags2.updateControlledSetting;
      const obj = FlagUtilsAll;
      if (arg0) {
        addFlagResult = obj.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS);
      } else {
        addFlagResult = obj.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
      }
      const result = updateControlledSetting(selectedTeenId, addFlagResult);
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualFriendsSetting.tsx");

export default toggle;
