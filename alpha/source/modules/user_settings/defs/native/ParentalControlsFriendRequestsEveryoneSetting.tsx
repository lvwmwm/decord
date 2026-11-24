// Module ID: 17430
// Function ID: 17431
// Name: ParentalControlsFriendRequestsEveryoneSetting
// Dependencies: [19, 8071, 9414, 1071, 8076, 16152, 7225, 16156, 11815, 1112, 2]

// Module 17430 (ParentalControlsFriendRequestsEveryoneSetting)
import intl2 from "intl" /* 1112 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7225 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16152 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16156 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8071 */;
import Constants from "Constants" /* 1071 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
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
    let obj = controlledSetting(8076);
    const selectedTeenId = obj.useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(16152).ParentalControlledFriendSourceFlags;
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
