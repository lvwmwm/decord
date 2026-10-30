// Module ID: 17882
// Function ID: 17883
// Name: ParentalControlsFriendRequestsEveryoneSetting
// Dependencies: [19, 7708, 8424, 1072, 8363, 16667, 7159, 11505, 1114, 2]

// Module 17882 (ParentalControlsFriendRequestsEveryoneSetting)
import intl2 from "intl" /* 1114 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7159 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16667 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import Constants from "Constants" /* 1072 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
    let obj = controlledSetting(8363);
    const selectedTeenId = obj.useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(16667).ParentalControlledFriendSourceFlags;
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
      let tmp7;
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const updateControlledSetting = ParentalControlledFriendSourceFlags.updateControlledSetting;
      if (arg0) {
        tmp7 = tmp5;
      } else {
        tmp7 = tmp5 & ~hasOwnProperty.NO_RELATION;
      }
      const result = updateControlledSetting(selectedTeenId, tmp7);
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default toggle;
