// Module ID: 18472
// Function ID: 18473
// Name: ParentalControlsFriendRequestsMutualGuildsSetting
// Dependencies: [19, 8673, 9136, 1072, 9552, 17229, 7747, 17233, 1403, 12317, 1113, 2]

// Module 18472 (ParentalControlsFriendRequestsMutualGuildsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FlagUtilsAll from "FlagUtils" /* 1403 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7747 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17229 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17233 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8673 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendSourceFlags = Constants.FriendSourceFlags;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.mozb8f);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualGuildsSettingValue() {
    let controlledSetting;
    let obj = controlledSetting(9552);
    const selectedTeenId = obj.useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(17229).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return react.useMemo(() => {
      const obj = UserSettingsUtils;
      return obj.computeFlags(controlledSetting);
    }, items).mutualGuilds;
  },
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
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
        addFlagResult = obj.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS);
      } else {
        addFlagResult = obj.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
      }
      showToastIfSaveFails(updateControlledSetting(selectedTeenId, addFlagResult));
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualGuildsSetting.tsx");

export default toggle;
