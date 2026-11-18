// Module ID: 17446
// Function ID: 17447
// Name: ParentalControlsFriendRequestsEveryoneSetting
// Dependencies: [19, 8247, 8624, 1072, 9044, 16041, 7326, 16045, 11897, 1113, 2]

// Module 17446 (ParentalControlsFriendRequestsEveryoneSetting)
import intl2 from "intl" /* 1113 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7326 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16041 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16045 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8247 */;
import Constants from "Constants" /* 1072 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
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
    let obj = controlledSetting(9044);
    const selectedTeenId = obj.useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(16041).ParentalControlledFriendSourceFlags;
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
