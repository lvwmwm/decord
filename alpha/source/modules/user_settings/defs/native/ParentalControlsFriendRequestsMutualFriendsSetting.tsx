// Module ID: 18219
// Function ID: 18220
// Name: ParentalControlsFriendRequestsMutualFriendsSetting
// Dependencies: [19, 7860, 8578, 1072, 8517, 16992, 7305, 16996, 1398, 11737, 1113, 2]

// Module 18219 (ParentalControlsFriendRequestsMutualFriendsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FlagUtilsAll from "FlagUtils" /* 1398 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7305 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16992 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16996 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7860 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
    let obj = controlledSetting(8517);
    const selectedTeenId = obj.useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(16992).ParentalControlledFriendSourceFlags;
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
      const showToastIfSaveFails = FamilyCenterSaveErrorUtils.showToastIfSaveFails;
      FamilyCenterSaveErrorUtils;
      const ParentalControlledFriendSourceFlags2 = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const updateControlledSetting = ParentalControlledFriendSourceFlags2.updateControlledSetting;
      const obj = FlagUtilsAll;
      if (arg0) {
        addFlagResult = obj.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS);
      } else {
        addFlagResult = obj.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
      }
      showToastIfSaveFails(updateControlledSetting(selectedTeenId, addFlagResult));
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualFriendsSetting.tsx");

export default toggle;
