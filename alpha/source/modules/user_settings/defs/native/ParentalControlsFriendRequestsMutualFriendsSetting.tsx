// Module ID: 17883
// Function ID: 17884
// Name: ParentalControlsFriendRequestsMutualFriendsSetting
// Dependencies: [19, 7708, 8424, 1072, 8363, 16667, 7159, 1397, 11505, 1114, 2]

// Module 17883 (ParentalControlsFriendRequestsMutualFriendsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import FlagUtilsAll from "FlagUtils" /* 1397 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7159 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16667 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendSourceFlags = Constants.FriendSourceFlags;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.IqlCSq);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    let controlledSetting;
    let obj = controlledSetting(8363);
    const selectedTeenId = obj.useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(16667).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return react.useMemo(() => {
      const obj = UserSettingsUtils;
      return obj.computeFlags(controlledSetting);
    }, items).mutualFriends;
  },
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
