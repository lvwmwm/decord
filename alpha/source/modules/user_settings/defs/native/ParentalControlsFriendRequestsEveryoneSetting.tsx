// Module ID: 18465
// Function ID: 18466
// Name: ParentalControlsFriendRequestsEveryoneSetting
// Dependencies: [19, 8673, 9135, 1072, 9551, 17224, 7747, 17228, 12311, 1113, 2]

// Module 18465 (ParentalControlsFriendRequestsEveryoneSetting)
import intl2 from "intl" /* 1113 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7747 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17224 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17228 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8673 */;
import Constants from "Constants" /* 1072 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AllFriendSourceFlags: closure_4, FriendSourceFlags: hasOwnProperty } = Constants);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.mGr3CX);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    let controlledSetting;
    let obj = controlledSetting(9551);
    const selectedTeenId = obj.useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(17224).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return react.useMemo(() => {
      const obj = UserSettingsUtils;
      return obj.computeFlags(controlledSetting);
    }, items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let tmp8;
      const showToastIfSaveFails = FamilyCenterSaveErrorUtils.showToastIfSaveFails;
      FamilyCenterSaveErrorUtils;
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const updateControlledSetting = ParentalControlledFriendSourceFlags.updateControlledSetting;
      if (arg0) {
        tmp8 = tmp6;
      } else {
        tmp8 = tmp6 & ~hasOwnProperty.NO_RELATION;
      }
      showToastIfSaveFails(updateControlledSetting(selectedTeenId, tmp8));
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default toggle;
